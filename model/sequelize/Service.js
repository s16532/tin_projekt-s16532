const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Service = sequelize.define('Service', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    active:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
});

module.exports = Service;