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
    foreignKey: {name: 'admissionEmps', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  Repair.belongsTo(Employee, {as: 'admission_Emp', foreignKey: {name: 'admissionEmp', allowNull: false}});

//EMPLOYEE --- REPAIR (RELEASE)
  Employee.hasMany(Repair, {
    as: 'releases',
    foreignKey: {name: 'releaseEmps', allowNull: true},
    constraints: true,
    onDelete: 'CASCADE'
  });
  Repair.belongsTo(Employee, {as: 'release_Emp', foreignKey: {name: 'releaseEmp', allowNull: true}});

//SERVICE --- REPAIR_SERVICE
  Service.hasMany(RepairService, {
    as: 'repair_services',
    foreignKey: {name: 'service_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Service, {as: 'service', foreignKey: {name: 'service_id', allowNull: false}});

//REPAIR --- REPAIR_SERVICE
  Repair.hasMany(RepairService, {
    as: 'repair_services',
    foreignKey: {name: 'repair_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Repair, {as: 'repair', foreignKey: {name: 'repair_id', allowNull: false}});

//EMPLOYEE --- REPAIR_SERVICE
  Employee.hasMany(RepairService, {
    as: 'repair_services',
    foreignKey: {name: 'employee_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Employee, {as: 'mechanic', foreignKey: {name: 'employee_id', allowNull: false}});

//STATUS --- REPAIR
  Status.hasMany(Repair, {
    as: 'repairs',
    foreignKey: {name: 'status_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Status, {as: 'statuses', foreignKey: {name: 'status_id', allowNull: false}});

//VEHICLE --- REPAIR
  Vehicle.hasMany(Repair, {
    as: 'repairs',
    foreignKey: {name: 'vehicle_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  Repair.belongsTo(Vehicle, {as: 'vehicle', foreignKey: {name: 'vehicle_id', allowNull: false}});

//LOCATION --- REPAIR
  Location.hasMany(Repair, {
    as: 'repairs',
    foreignKey: {name: 'location_id', allowNull: false},
    constraints: true,
    onDelete: 'CASCADE'
  });
  RepairService.belongsTo(Location, {as: 'location', foreignKey: {name: 'location_id', allowNull: false}});


  let allEmps, allLocs, allServs, allVehs, allStatuses, allRepServ, allReps;
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
                return Location.findAll();
              });
        } else {
          return locs;
        }
      })
      .then(locs => {
        allLocs = locs;
        return Vehicle.findAll(); //zwrot podstawy do następnej operacji
      })
      .then(vehs => {
        if (!vehs || vehs.length == 0) {
          return Vehicle.bulkCreate([
            {
              VIN: '1NXBU4EE0AZ325696',
              type: 'Samochód osobowy',
              brand: 'Opel',
              model: 'Corsa',
              productionYear: 2000,
              engineType: 'Benzyna',
              engineSize: 1.0
            },
            {
              VIN: 'JS2RA62SX65342742',
              type: 'Samochód osobowy',
              brand: 'Fiat',
              model: '500',
              productionYear: 2019,
              engineType: 'Benzyna',
              engineSize: 1.3
            },
          ])
              .then(() => {
                return Vehicle.findAll();
              });
        } else {
          return vehs;
        }
      })
      .then(vehs => {
        allVehs = vehs;
        return Employee.findAll(); //zwrot podstawy do następnej operacji
      })
      .then(emps => {
        if (!emps || emps.length == 0) {
          return Employee.bulkCreate([
            {
              lastName: 'Marchewka',
              firstName: 'Apolonia',
              uname: 'amarchewka',
              passwd: 'Welcome1',
              active: true,
            },
            {
              lastName: 'Nowak',
              firstName: 'Adam',
              uname: 'anowak',
              passwd: 'Welcome1',
              active: true,
            },
            {
              lastName: 'Kowalski',
              firstName: 'Marian',
              uname: 'mkowalski',
              passwd: 'Welcome1',
              active: true,
            },
          ])
              .then(() => {
                return Employee.findAll();
              });
        } else {
          return emps;
        }
      })
      .then(emps => {
        allEmps = emps;
        return RepairService.findAll(); //zwrot podstawy do następnej operacji
      })
      .then(reps => {
        if (!reps || reps.length == 0) {
          return Repair.bulkCreate([
            {
              status_id: allStatuses[5],
              location_id: allLocs[0],
              vehicle_VIN: allVehs[0],
              admissionDate: '2020-12-01',
              admissionEmp: allEmps[0],
              releaseDate: "2020-12-05",
              releaseEmp: allEmps[3]
            },
            {
              status_id: allStatuses[4],
              location_id: allLocs[0],
              vehicle_VIN: allVehs[1],
              admissionDate: '2020-12-02',
              admissionEmp: allEmps[0],
              releaseDate: null,
              releaseEmp: null
            },
            {
              status_id: allStatuses[5],
              location_id: allLocs[1],
              vehicle_VIN: allVehs[0],
              admissionDate: '2021-01-11',
              admissionEmp: allEmps[2],
              releaseDate: "2020-01-18",
              releaseEmp: allEmps[2]
            },
          ])
              .then(() => {
                return Repair.findAll();
              });
        } else {
          return reps;
        }
      })
      .then( reps => {
        allReps = reps;
        return RepairService.findAll(); //zwrot podstawy do następnej operacji
      })
      .then(repServs => {
        if (!repServ || repServs.length == 0) {
          return RepairService.bulkCreate([
            {
              repair_id: allReps[0],
              serivce_id: allServs[0],
              date: '2020-12-02',
              employee_id: allEmps[3],
            },

            {
              repair_id: allReps[0],
              serivce_id: allServs[2],
              date: '2020-12-04',
              employee_id: allEmps[3],
            },
          ])
              .then(() => {
                return RepairService.findAll();
              });
        } else {
          return repServs;
        }
      })

};



