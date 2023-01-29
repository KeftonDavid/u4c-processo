
import Hapi from '@hapi/hapi';
import { AppDataSource } from "./data-source";
import cors from 'cors';
import { RegistroAcidente } from './tabelas/RegistroAcidente';
import { Terceiro } from './tabelas/Terceiro';
import { Usuario } from './tabelas/Usuario';
import  bcrypt  from 'bcrypt';


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

        server.route({
            method: 'POST',
            path:'/registrousuario',
            handler: async (request, h) => {

                const hashSenha = await bcrypt.hash((request.payload as any).senha, 10);
                const registrousuarioRepository = AppDataSource.getRepository(Usuario);

                
                const usuarioexiste = await registrousuarioRepository.exist({
                    where: { 
                        email: (request.payload as any).email,
                        cpf: (request.payload as any).cpf
                    } 
                })
                
                
                if(usuarioexiste == true){
                    return 'usuário já existe!';
                }
                else{
                    const newregistrousuario = registrousuarioRepository.create({
                        nome: (request.payload as any).nome,
                        email: (request.payload as any).email,
                        cpf: (request.payload as any).cpf,
                        senha: hashSenha
                    }) 
                    
                    await registrousuarioRepository.save(newregistrousuario);
                    return 'Perfil criado com sucesso!';
    
                }
                

            }
        });

        server.route({
            method: 'GET',
            path:'/registroacidente',
            handler: (request, h) => {
              return  
            }
        });

        server.route({
            method: 'GET',
            path:'/registrousuario',
            handler: (request, h) => {
                
            }
        });

        server.route({
            method: 'POST',
            path:'/login',
            handler: (request, h) => {
                
                
            }
        });

        server.route({
            method: 'PUT',
            path:'/perfil/{id}',
            handler: (request, h) => {
                
            }
        });

        await server.start();
        console.log("Servidor funcionando: ", server.info.port);
    };
    
        process.on('unhandledRejection', (err) => {
            console.log(err);
            process.exit(1);
        })
    
    init();
})