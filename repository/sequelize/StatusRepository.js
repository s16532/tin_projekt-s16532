const Employee = require("../../model/sequelize/Employee");
const Location = require("../../model/sequelize/Location");
const Repair = require("../../model/sequelize/Repair");
const RepairService = require("../../model/sequelize/RepairService");
const Service = require("../../model/sequelize/Service");
const Status = require("../../model/sequelize/Status");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getStatus = () => {
    return Status.findAll();
};

exports.getStatusById = (statusId) => {
    return Location.findByPk(statusId,
        {
            include: [{
                model: Repair,
                as: 'repairs'
            }]
        });
};

exports.createStatus = (data) => {
    return Status.create({
        name: data.name,
    });
};

exports.updateStatus = (statusId, data) => {
    return Status.update(data, {where: {id: statusId }});
};

exports.deleteStatus = (statusId) => {
    return Status.destroy({
        where: { id: statusId }
    });

};