
import Hapi from '@hapi/hapi';
import { AppDataSource } from "./data-source";
import cors from 'cors';
import { RegistroAcidente } from './tabelas/RegistroAcidente';
import { Terceiro } from './tabelas/Terceiro';
import { Usuario } from './tabelas/Usuario';
import  bcrypt  from 'bcrypt';
import * as cookie from '@hapi/cookie';

AppDataSource.initialize().then(() => {
    const init = async () => {
        const server = Hapi.server({
            port: process.env.PORT,
            host: 'localhost',
            routes: {
                cors: {
                    origin: ['*']

                }
            }
        })

        
        server.route({
            method: 'POST',
            path:'/registroacidente',
            handler: async (request, h) => {
                console.log((request.payload as any));
                
                const registroacidenteRepository = AppDataSource.getRepository(RegistroAcidente);
                const newregistroacidente = registroacidenteRepository.create({
                    donoVeiculo: (request.payload as any).donoVeiculo,
                    modelo: (request.payload as any).modelo,
                    ano: (request.payload as any).ano,
                    placa: (request.payload as any).placa,
                    descricaoAcidente: (request.payload as any).descricaoAcidente
                })
                
                console.log(newregistroacidente);
                

                await registroacidenteRepository.save(newregistroacidente);

                const terceiroRepository = AppDataSource.getRepository(Terceiro);
                const newterceiro = terceiroRepository.create({
                    nome: (request.payload as any).nome,
                    cpf: (request.payload as any).cpf
                })

                console.log(newterceiro);
                

                await terceiroRepository.save(newterceiro);

                return "registro de acidente feito com sucesso";
            }
        });

        server.route({                                                                                              //rota de criação de conta de usuário, chamada no componente angular de registro de conta
            method: 'POST',
            path:'/registrousuario',
            handler: async (request, h) => {

                const hashSenha = await bcrypt.hash((request.payload as any).senha, 10);                            //criptografia de senha
                const registrousuarioRepository = AppDataSource.getRepository(Usuario);

                
                const usuarioexiste = await registrousuarioRepository.exist({                                       //verificando se usuário existe
                    where: { 
                        email: (request.payload as any).email,
                        cpf: (request.payload as any).cpf
                    } 
                })
                
                
                if(usuarioexiste == true){                                                                           //se usuário já existe, não é possível cadastrar-se
                    return 'usuário já existe!';
                }
                else{                                                                                                //se não existe, é realizado o cadastro
                    const newregistrousuario = registrousuarioRepository.create({                                    //recebendo corpo de requisição e atribuindo a tabela de usuário
                        nome: (request.payload as any).nome,
                        email: (request.payload as any).email,
                        cpf: (request.payload as any).cpf,
                        senha: hashSenha
                    }) 
                    
                    await registrousuarioRepository.save(newregistrousuario);                                        //criação de perfil de usuário
                    return 'Perfil criado com sucesso!';
    
                }
                

            }
        });

        await server.register(require('@hapi/cookie'));
        server.auth.strategy('session', 'cookie', {
            cookie: {
                name: 'testecookie',
                password: 'azsxdcfvgbhnjmazsxdcfvgbhnjmazsx',
                isSecure: false
            }
        })

        server.route({                                                                                                  //rota de login, chamada no componente angular de login
            method: 'POST',
            path:'/login',
            options: {
                auth: false
            },
            handler: async (request, h) => {
                
                const loginRepository = AppDataSource.getRepository(Usuario);
                
                const senhaexiste = await loginRepository.findOne({                                                     //verificando se senha existe, fazendo busca no banco onde o e-mail seja igual ao da requisição
                    select:{
                        senha: true
                    },
                    where: {
                        email: (request.payload as any).email
                    }
                })
                
                const hashSenha = await bcrypt.compare((request.payload as any).senha, (senhaexiste?.senha as string));  //comparando senha criptografada do banco com a senha proveniente da requisição
                const usuarioexiste = await loginRepository.exist({                                                      //verificando se o e-mail existe
                    where: {
                        email: (request.payload as any).email,
                    }
                })
                
                const emailUsuario = await loginRepository.findOne({
                    select: {
                        email: true
                    },
                    where: {
                        email: ((request.payload as any).email)
                    }
                })

                if(usuarioexiste == true && hashSenha == true){    
                                                                                                                        //se o e-mail existe e as duas senhas criptografadas são equivalentes, fazer login
                    request.cookieAuth.set({email: (request.payload as any).email})
                    return h.response((request.payload as any).email)
                }
                else{                                                                                                    // se o e-mail não existe e/ou as senhas não correspondem, as credenciais estão inválidas.
                    return h.response(undefined);
                }
            }
        });

        server.route({
            method: 'GET',
            path:'/perfil',
            handler: (request, h) => {
              const usuarioRepository = AppDataSource.getRepository(Usuario);
              const perfil = usuarioRepository.findOne({
                select: {
                    email: true,
                    cpf: true,
                    nome: true,
                    senha: true
                },
                where: {
                    email: request.state.email
                }
              })
            return perfil;
            
            }
        });

        server.route({
            method: 'GET',
            path:'/perfil/logout',
            handler: (request, h) => {
                return h.response().unstate('email');
            }
        });

        await server.start();
        console.log("Servidor funcionando na porta ", server.info.port);
    };
    
        process.on('unhandledRejection', (err) => {
            console.log(err);
            process.exit(1);
        })
    
    init();
})