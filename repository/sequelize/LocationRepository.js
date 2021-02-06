const Employee = require("../../model/sequelize/Employee");
const Location = require("../../model/sequelize/Location");
const Repair = require("../../model/sequelize/Repair");
const RepairService = require("../../model/sequelize/RepairService");
const Service = require("../../model/sequelize/Service");
const Status = require("../../model/sequelize/Status");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getLocations = () => {
    return Location.findAll();
};

exports.getLocationById = (locationId) => {
    return Location.findByPk(locationId,
        {
            include: [{
                model: Repair,
                as: 'repairs',
                include: [{
                    model: Vehicle,
                    as: 'vehicle'
                },{
                    model: Status,
                    as: 'status'
                }]
            }]
        });
};

exports.createLocation = (data) => {
    return Location.create({
        name: data.name,
        city: data.city,
        street: data.street,
        streetNum: data.streetNum,
        postCode: data.postCode,
    });
};

exports.updateLocation = (locationId, data) => {
    return Location.update(data, {where: {id: locationId }});
};

exports.deleteLocation = (locationId) => {
    return Location.destroy({
        where: { id: locationId }
    });

};