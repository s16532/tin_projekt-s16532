const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Repair = sequelize.define('Repair', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        },
    },
    location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        },
    },
    vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        },
    },
    admissionDate:{
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
    admissionEmp:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
        },
    },
    releaseDate:{
        type: Sequelize.DATEONLY,
        allowNull: true,
        validate: {
            isDate: {
                msg: "Pole powinno zawierać datę"
            },
        },
    },
    releaseEmp:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
});

module.exports = Repair;