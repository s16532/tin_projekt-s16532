const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Employee = sequelize.define('Employee', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    role_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    uname:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    passwd:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    active:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
});

module.exports = Employee;