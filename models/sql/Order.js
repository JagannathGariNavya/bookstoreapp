const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const OrderItem = require('./OrderItem');

const Order = sequelize.define('Order', {
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Order.hasMany(OrderItem, { as: 'orderItems' });

module.exports = Order;
