const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Location = sequelize.define('Location', {
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
    city:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    street:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    streetNum:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    postCode:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    post:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Location;