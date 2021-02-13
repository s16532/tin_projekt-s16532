const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Status = sequelize.define('Status', {
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
});

module.exports = Status;