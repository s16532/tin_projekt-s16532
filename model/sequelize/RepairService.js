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
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        },
    },
    date:{
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Pole powinno zawierać datę"
            },
        },
    },
    employee_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        },
    },
});

module.exports = RepairService;