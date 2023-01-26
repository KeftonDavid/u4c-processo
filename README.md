# u4c-processo
Teste prático do processo seletivo da empresa u4c, que consiste no desenvolvimento de uma aplicação para uma empresa de proteção veicular.

# Descrição recebida para o desenvolvimento da aplicação
- Modele um sistema para uma empresa de proteção veicular.
- Nesse sistema existem clientes e terceiros.
- Os clientes podem criar uma conta inserindo informações básicas de cadastro.
- Os clientes podem editar alguns dados cadastrados.
- Os clientes podem criar um evento de acidente, onde será possível informar o veículo envolvido no acidente e o(s) terceiro(s).
- Os terceiros são cadastrados quando é criado um acidente, se não houver um registro prévio na base de dados.
- Todos os usuários(clientes e terceiros) precisam ter documentos associados as suas contas.
- Quando um houve o cadastro de um cliente que já foi envolvido como terceiro em um acidente, é preciso migrar o usuário para cliente sem perder o vínculo criado no acidente.

# Tecnologias que devem ser utilizadas
- NodeJS
- Typescript
- HapiJS
- TypeORM
- PostgreSQL
- Jest
