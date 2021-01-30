const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const RepairService = sequelize.define('RepairService', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    repair_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    service_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    employee_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = RepairService;