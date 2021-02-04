const Employee = require("../../model/sequelize/Employee");
const Location = require("../../model/sequelize/Location");
const Repair = require("../../model/sequelize/Repair");
const RepairService = require("../../model/sequelize/RepairService");
const Service = require("../../model/sequelize/Service");
const Status = require("../../model/sequelize/Status");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getVehicles = () => {
    return Vehicle.findAll();
};

exports.getVehicleById = (vehicleId) => {
    return Location.findByPk(vehicleId,
        {
            include: [{
                model: Repair,
                as: 'repairs',
                include: [{
                    model: RepairService,
                    as: 'repair_services',
                    include: [{
                        model: Service,
                        as: 'service'
                    }]
                }]
            }, {
                model: Location,
                as: 'location'
            }]
        });
};

exports.createService = (data) => {
    return Service.create({
        name: data.name,
        price: data.price,
        active: data.action,
    });
};

exports.updateService = (serviceId, data) => {
    return Service.update(data, {where: {id: serviceId }});
};

exports.deleteService = (serviceId) => {
    return Location.destroy({
        where: { id: serviceId }
    });

};