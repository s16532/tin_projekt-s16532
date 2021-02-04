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
    return Vehicle.findByPk(vehicleId,
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
                }, {
                    model: Status,
                    as: 'status'
                }, {
                    model: Location,
                    as: 'location'
                }]
            }]
        });
};

exports.createVehicle = (data) => {
    return Vehicle.create({
        VIN: data.VIN,
        type: data.type,
        brand: data.brand,
        model: data.model,
        productionYear: data.productionYear,
        engineType: data.engineType,
        engineSize: data.engineSize,
    });
};

exports.updateVehicle = (vehicleId, data) => {
    return Vehicle.update(data, {where: {id: vehicleId }});
};

exports.deleteVehicle = (vehicleId) => {
    return Vehicle.destroy({
        where: { id: vehicleId }
    });

};