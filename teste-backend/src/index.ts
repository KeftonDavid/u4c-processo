
import Hapi from '@hapi/hapi';
import { AppDataSource } from "./data-source";


AppDataSource.initialize().then(() => {
    const init = async () => {
        const server = Hapi.server({
            port: process.env.PORT,
            host: 'localhost'
        })
    
        
        server.route({
            method: 'POST',
            path:'/registroacidente',
            handler: (request, h) => {
                return h.response('Registro de acidente');
            }
        });

        server.route({
            method: 'GET',
            path:'/registroacidente',
            handler: (request, h) => {
                
            }
        });

        server.route({
            method: 'POST',
            path:'/registrousuario',
            handler: (request, h) => {
                
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