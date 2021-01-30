const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Vehicle = sequelize.define('Vehicle', {
    VIN: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    brand:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    model:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    productionYear:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    engineType:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    engineSize:{
        type: Sequelize.DECIMAL(10,1),
        allowNull: false,
    }
});

module.exports = Vehicle;