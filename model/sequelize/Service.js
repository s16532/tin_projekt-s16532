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
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2,60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
        },
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },

            isInt: {
                msg: "Pole powinno zawierać liczbę"
            },
        },
    },
});

module.exports = Service;