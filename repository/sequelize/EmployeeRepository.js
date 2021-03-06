const Employee = require("../../model/sequelize/Employee");
const Location = require("../../model/sequelize/Location");
const Repair = require("../../model/sequelize/Repair");
const RepairService = require("../../model/sequelize/RepairService");
const Service = require("../../model/sequelize/Service");
const Status = require("../../model/sequelize/Status");
const Vehicle = require("../../model/sequelize/Vehicle");

exports.getEmployees = () => {
    return Employee.findAll();
};

exports.getEmployeeById = (empId) => {
    return Employee.findByPk(empId,
        {
            include: [{
                model: Repair,
                as: 'admissions'
            }, {
                model: Repair,
                as: 'releases'
            }, {
                model: RepairService,
                as: 'repair_services'
            }]
        });
};

exports.findByUname = (uname) => {
    return Employee.findOne({
        where: {uname: uname}
    });
}

exports.createEmployee = (newEmpData) => {
    return Employee.create({
        lastName: newEmpData.lastName,
        firstName: newEmpData.firstName,
        uname: newEmpData.uname,
        passwd: newEmpData.passwd,
        active: newEmpData.active,
    });
};

exports.updateEmployee = (empId, empData) => {
    return Employee.update(empData, {where: {id: empId }});
};

exports.deleteEmployee = (empId) => {
    return Employee.destroy({
        where: { id: empId }
    });

};