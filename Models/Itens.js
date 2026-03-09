const { DataTypes } = require('sequelize');
const database = require('./database');

const Itens = database.define('Itens', {
    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    productId: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.DOUBLE 
    },

    orderId: {
        type: DataTypes.UUID,
        allowNull: false
    }
})


module.exports = Itens;