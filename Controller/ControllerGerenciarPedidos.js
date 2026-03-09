const express = require('express')
const BodyParser = require('body-parser')
const database = require('../Models/database')
const Order = require('../Models/Order')
const Itens = require('../Models/Itens')

const app = express()



Order.hasMany(Itens, {as: "items", foreignKey: "orderId"});
Itens.belongsTo(Order, {foreignKey: "orderId"});

app.use(BodyParser.json())

app.post('/order', async (req,res)=> {
    try {

        const order = await Order.create({
            orderId: req.body.numeroPedido,
            value: req.body.valorTotal,
            creationDate: req.body.dataCriacao,
            items: req.body.items.map(item =>( {
                productId: item.idItem,
                quantity: item.quantidadeItem,
                price: item.valorItem
            }))
        },{
            include: [{
                model: Itens,
                as: "items"
            }]
        }) 

         const savedOrder = await Order.findOne({
            where: { orderId: order.orderId },
            include: [{ model: Itens, as: "items" }]
        });

        return res.status(201).json(savedOrder);

    }catch(error){
        res.status(500).json({
            erro: "Erro ao preencher os dados " + error.message 
        })
    }
});


app.get('/order/list',  async (req,res) => {
    try {

        const Pedidos = await Order.findAll({
            include: [{
                model: Itens,
                as: "items",
                required: false
            }]
        });

        return res.status(200).json(Pedidos)
    }catch(error){
        return res.status(400).json({
            message: "Erro na requisição solicitada " + error
        })
    }
})


app.get('/order/:orderId', async (req,res) => {
    
    try{
        const Pedido = await Order.findOne({
            where: {
                orderId: req.params.orderId
            },

            include: [{
                model: Itens,
                as: "items"
            }]
        })

        return res.status(200).json(Pedido);
    
    }catch(error){
        res.status(404).json({
            message: "Recurso requisitado não encontrado !" + error
        })
    }
   
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
