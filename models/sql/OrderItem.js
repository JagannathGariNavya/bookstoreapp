const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const OrderItem = sequelize.define('OrderItem', {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderItem;
