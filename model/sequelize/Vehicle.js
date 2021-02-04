const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Vehicle = sequelize.define('Vehicle', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    VIN: {
        type: Sequelize.STRING,
        allowNull: false,
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
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
    }
});

module.exports = Vehicle;