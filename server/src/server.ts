import express from 'express';

const app = express();

/*
porta 80 é a porta padrão!
rota: endereço que preciso acessar (endereço da aplicação). Quando o usuario pedir o /users
eu necessito executar alguma coisa, que é a aplicação. 
o request é o que eu preciso buscar no backend através do frontend e o response é a resposta que meu backend irá levar para o frontend
recurso é o que vem logo após a rota.

métodos mais utilizados :
GET: Buscar ou listar uma informação
POST: Criar alguma nova informacao dentro do backend
PUT: Atualizar uma informação existente
DELETE: Deletar uma informação existente */


app.get('/users', (request, response) =>{
    const users = [
        {
        name: 'Diego', age: 25},
        {name: 'Leandra', age: 20}
    ];
return response.json(users)})
// ouvir as requisições http. O parâmetro é o numero da porta.
app.listen(3333);