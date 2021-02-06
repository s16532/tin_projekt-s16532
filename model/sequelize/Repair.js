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
    },
    location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    vehicle_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    admissionDate:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    admissionEmp:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    releaseDate:{
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    releaseEmp:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
});

module.exports = Repair;