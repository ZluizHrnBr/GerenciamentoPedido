const express = require('express')
const BodyParser = require('body-parser')
const database = require('./Models/database')

const app = express()

app.use(BodyParser.json)

app.post('/CriarNovoPedido', (req,res)=> {

});

app.get('/ObterDadosPedido/:orderId', (req,res) => {

})

app.get('/ListarTodosPedidos', (req,res) => {

})

app.put('/AtualizarPedido/:orderId', (req,res) =>{

})

app.delete('/DeletarPedido/:orderId', (req, res) => {

})

database.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor Rodando.......")
    });    
});
