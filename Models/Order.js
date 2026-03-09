const { DataTypes } = require('sequelize');
const database = require('./database');

const Order = database.define('Order', {

    Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    
    orderId: {
        type: DataTypes.STRING
    },

    value: {
        type: DataTypes.DOUBLE
    },
    creationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

})

module.exports = Order
