const Employee = require("../../model/sequelize/Employee");
const Location = require("../../model/sequelize/Location");
const Repair = require("../../model/sequelize/Repair");
const RepairService = require("../../model/sequelize/RepairService");
const Service = require("../../model/sequelize/Service");
const Status = require("../../model/sequelize/Status");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getRepairs = () => {
    return Repair.findAll({include: [
            {
                model: RepairService,
                as: 'repair_services',
                include: [
                    {
                        model: Service,
                        as: 'service'
                    },{
                        model: Employee,
                        as: 'mechanic'
                    }
                ]
            },{
                model: Location,
                as: 'location'
            },{
                model: Vehicle,
                as: 'vehicle'
            },{
                model: Employee,
                as: 'admission_Emp'
            },{
                model: Employee,
                as: 'release_Emp'
            },{
                model: Status,
                as: 'status'
            }
        ]});
};

exports.getRepairById = (repairId) => {
    return Repair.findByPk(repairId, { include: [
        {
            model: RepairService,
            as: 'repair_services',
            include: [
                {
                    model: Service,
                    as: 'service'
                },{
                    model: Employee,
                    as: 'mechanic'
                }
            ]
        },{
            model: Location,
            as: 'location'
        },{
            model: Vehicle,
            as: 'vehicle'
        },{
            model: Employee,
            as: 'admission_Emp'
        },{
            model: Employee,
            as: 'release_Emp'
        },{
            model: Status,
            as: 'status'
        }
    ]});
};

exports.createRepair = (data) => {
    return Repair.create({
        status_id: data.status_id,
        location_id: data.location_id,
        vehicle_id: data.vehicle_id,
        admissionDate: data.admissionDate,
        admissionEmp: data.admissionEmp,
        releaseDate: data.releaseDate,
        releaseEmp: data.releaseEmp,
    });
};

exports.updateRepair = (repairId, data) => {
    return Repair.update(data, {where: {id: repairId }});
};

exports.deleteRepair = (repairId) => {
    return Repair.destroy({
        where: { id: repairId }
    });

};