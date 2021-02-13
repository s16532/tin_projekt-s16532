const Employee = require("../../model/sequelize/Employee");
const Location = require("../../model/sequelize/Location");
const Repair = require("../../model/sequelize/Repair");
const RepairService = require("../../model/sequelize/RepairService");
const Service = require("../../model/sequelize/Service");
const Status = require("../../model/sequelize/Status");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getRepairServices = () => {
    return RepairService.findAll({include: [
            {
                model: Service,
                as: 'service'
            },{
                model: Repair,
                as: 'repair'
            },{
                model: Employee,
                as: 'mechanic'
            }
        ]});
};

exports.getRepairServiceById = (repairServiceId) => {
    return RepairService.findByPk(repairServiceId,
        {
            include: [{
                model: Service,
                as: 'service',
            }, {
                model: Repair,
                as: 'repair'
            }, {
                model: Employee,
                as: 'mechanic'
            }]
        });
};

exports.createRepairService = (data) => {
    return RepairService.create({
        repair_id: data.repair_id,
        service_id: data.service_id,
        date: data.date,
        employee_id: data.employee_id,
    });
};

exports.updateRepairService = (repairServiceId, data) => {
    return RepairService.update(data, {where: {id: repairServiceId }});
};

exports.deleteRepairService = (repairServiceId) => {
    return RepairService.destroy({
        where: { id: repairServiceId }
    });

};