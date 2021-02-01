const sequelize = require('./sequelize');

const Employee = require('../../model/sequelize/Employee');
const Location = require('../../model/sequelize/Location');
const Repair = require('../../model/sequelize/Repair');
const RepairService = require('../../model/sequelize/RepairService');
const Service = require('../../model/sequelize/Service');
const Vehicle = require('../../model/sequelize/Vehicle');
const Status = require('../../model/sequelize/Status');

module.exports = () => {

//EMPLOYEE --- REPAIR (ADMISSION)
  Employee.hasMany(Repair, {
    as: 'admissions',
    foreignKey: {name: 'admissionEmp', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  Repair.belongsTo(Employee, {as: 'admissionEmp', foreignKey: {name: 'admissionEmp', allowNull: false}});

//EMPLOYEE --- REPAIR (RELEASE)
  Employee.hasMany(Repair, {
    as: 'releases',
    foreignKey: {name: 'releaseEmp', allowNull: true},
    constraints: true,
    onDelete: 'CASCADE'
  });
  Repair.belongsTo(Employee, {as: 'admissionEmp', foreignKey: {name: 'releaseEmp', allowNull: true}});

//SERVICE --- REPAIR_SERVICE
  Service.hasMany(RepairService, {
    as: 'services',
    foreignKey: {name: 'service_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Service, {as: 'service', foreignKey: {name: 'service_id', allowNull: false}});

//REPAIR --- REPAIR_SERVICE
  Repair.hasMany(RepairService, {
    as: 'services_repair',
    foreignKey: {name: 'repair_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Repair, {as: 'repair', foreignKey: {name: 'repair_id', allowNull: false}});

//EMPLOYEE --- REPAIR_SERVICE
  Employee.hasMany(RepairService, {
    as: 'mechanic',
    foreignKey: {name: 'employee_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Employee, {as: 'repair', foreignKey: {name: 'employee_id', allowNull: false}});

//STATUS --- REPAIR
  Status.hasMany(Repair, {
    as: 'statuses',
    foreignKey: {name: 'status_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Status, {as: 'repair', foreignKey: {name: 'status_id', allowNull: false}});

//VEHICLE --- REPAIR
  Vehicle.hasMany(Repair, {
    as: 'vehicles',
    foreignKey: {name: 'vehicle_VIN', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Vehicle, {as: 'repair', foreignKey: {name: 'vehicle_VIN', allowNull: false}});

//LOCATION --- REPAIR
  Location.hasMany(Repair, {
    as: 'location',
    foreignKey: {name: 'location_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Location, {as: 'repair', foreignKey: {name: 'location_id', allowNull: false}});


  let allEmps, allLocs, allServs, allVehs, allStatuses;
  return sequelize
      .sync({force: true})
      .then(() => {
        return Status.findAll();
      })
      .then(statuses => {
        if (!statuses || statuses.length == 0) {
          return Status.bulkCreate([
            {name: 'Przyjęty'},
            {name: 'Diagnoza'},
            {name: 'Oczekuje'},
            {name: 'Na warsztacie'},
            {name: 'Gotowy do odbioru'},
            {name: 'Wydany'},
          ])
              .then(() => {
                return Employee.findAll();
              });
        } else {
          return statuses;
        }
      })
      .then(statuses => {
        allStatuses = statuses;
        return Service.findAll(); //zwrot podstawy do następnej operacji
      })
      .then(servs => {
        if (!servs || servs.length == 0) {
          return Service.bulkCreate([
            {name: 'Zmiana opon', price: 100, active: true},
            {name: 'Wymiana oleju (Własny Olej)', price: 70, active: true},
            {name: 'Wymiana klocków hamulcowych jedna oś', price: 500, active: true},
          ])
              .then(() => {
                return Employee.findAll();
              });
        } else {
          return servs;
        }
      })
      .then(servs => {
        allServs = servs;
        return Location.findAll(); //zwrot podstawy do następnej operacji
      })
      .then(locs => {
        if (!locs || locs.length == 0) {
          return Location.bulkCreate([
            {
              name: 'Warszawa-Jerozolimskie',
              city: 'Warszawa',
              street: 'Aleje Jerozolimskie',
              streetNum: '147',
              postCode: '02-326',
              country: 'Polska'
            },
            {
              name: 'Poznań-Krzesiny',
              city: 'Poznań',
              street: 'Ożarowska',
              streetNum: '42',
              postCode: '61-332',
              country: 'Polska'
            },
          ])
              .then(() => {
                return Employee.findAll();
              });
        } else {
          return locs;
        }
      })
      .then(locs => {
        allLocs = locs;
        return Vehicle.findAll(); //zwrot podstawy do następnej operacji
      })
      .then(locs => {
        if (!locs || locs.length == 0) {
          return Location.bulkCreate([
            {
              name: 'Warszawa-Jerozolimskie',
              city: 'Warszawa',
              street: 'Aleje Jerozolimskie',
              streetNum: '147',
              postCode: '02-326',
              country: 'Polska'
            },
            {
              name: 'Poznań-Krzesiny',
              city: 'Poznań',
              street: 'Ożarowska',
              streetNum: '42',
              postCode: '61-332',
              country: 'Polska'
            },
          ])
              .then(() => {
                return Employee.findAll();
              });
        } else {
          return locs;
        }
      })
};



