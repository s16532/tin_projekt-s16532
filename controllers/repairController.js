const RepairRepository = require('../repository/sequelize/RepairRepository');

const StatusRepository = require('../repository/sequelize/StatusRepository');
const VehicleRepository = require('../repository/sequelize/VehicleRepository');
const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');
const LocationRepository = require('../repository/sequelize/LocationRepository');
const RepairServiceRepository = require('../repository/sequelize/RepairServiceRepository');


exports.showRepairList = (req, res, next) => {
    RepairRepository.getRepairs()
        .then(reps => {
            res.render('pages/repair/list', {
                reps: reps,
                navLocation: 'rep'
            });
        });
}

exports.showAddRepairForm = (req, res, next) => {
    let allStatuses, allLocations, allVehicles, allRelEmps, allAdmEmps;
    StatusRepository.getStatus()
        .then(statuses => {
            allStatuses = statuses;
            return LocationRepository.getLocations();
        })
        .then(locs => {
            allLocations = locs;
            return VehicleRepository.getVehicles();
        })
        .then(vehs => {
            allVehicles = vehs;
            return EmployeeRepository.getEmployees();
        })
        .then(emps => {
            allAdmEmps = emps;
            allRelEmps = emps;
            res.render('pages/repair/form', {
                rep: {},
                formMode: 'createNew',
                allStatuses: allStatuses,
                allLocations: allLocations,
                allVehicles: allVehicles,
                allRelEmps: allRelEmps,
                allAdmEmps: allAdmEmps,
                pageTitle: 'Nowa naprawa',
                btnLabel: 'Dodaj naprawę',
                formAction: '/repairs/add',
                navLocation: 'rep'
            });
        })
}

exports.showEditRepairForm = (req, res, next) => {
    const id = req.params.repairId;
    let allStatuses, allLocations, allVehicles, allRelEmps, allAdmEmps;
    StatusRepository.getStatus()
        .then(statuses => {
            allStatuses = statuses;
            return LocationRepository.getLocations();
        })
        .then(locs => {
            allLocations = locs;
            return VehicleRepository.getVehicles();
        })
        .then(vehs => {
            allVehicles = vehs;
            return EmployeeRepository.getEmployees();
        })
        .then(emps => {
            allAdmEmps = emps;
            allRelEmps = emps;
            return RepairRepository.getRepairById(id)
        })
        .then(rep =>{
            res.render('pages/repair/form', {
                rep: rep,
                formMode: 'edit',
                allStatuses: allStatuses,
                allLocations: allLocations,
                allVehicles: allVehicles,
                allRelEmps: allRelEmps,
                allAdmEmps: allAdmEmps,
                pageTitle: 'Edycja naprawy',
                btnLabel: 'Edytuj naprawę',
                formAction: '/repairs/edit',
                navLocation: 'rep'
            });
        })

}

exports.showRepairDetails = (req, res, next) => {
    const id = req.params.repairId;
    let allStatuses, allLocations, allVehicles, allRelEmps, allAdmEmps, allRepServs;
    StatusRepository.getStatus()
        .then(statuses => {
            allStatuses = statuses;
            return LocationRepository.getLocations();
        })
        .then(locs => {
            allLocations = locs;
            return VehicleRepository.getVehicles();
        })
        .then(vehs => {
            allVehicles = vehs;
            return RepairServiceRepository.getRepairServices();
        })
        .then(repServs => {
            allRepServs = repServs
            return EmployeeRepository.getEmployees();
        })
        .then(emps => {
            allAdmEmps = emps;
            allRelEmps = emps;
            return RepairRepository.getRepairById(id)
        })
        .then(rep =>{
            res.render('pages/repair/form', {
                rep: rep,
                formMode: 'showDetails',
                allStatuses: allStatuses,
                allLocations: allLocations,
                allVehicles: allVehicles,
                allRelEmps: allRelEmps,
                allAdmEmps: allAdmEmps,
                allRepServs: allRepServs,
                pageTitle: 'Szczegóły naprawy',
                formAction: '',
                navLocation: 'rep'
            });
        })
}

exports.addRepair = (req, res, next) => {
    const vehData = { ...req.body };
    RepairRepository.createRepair(vehData)
        .then( result => {
            res.redirect('/repairs');
        });
};

exports.updateRepair = (req, res, next) => {
    const id = req.body.id;
    const data = { ...req.body };
    RepairRepository.updateRepair(id, data)
        .then( result => {
            res.redirect('/repairs');
        });
};

exports.deleteRepair = (req, res, next) => {
    const id = req.params.repairId;
    RepairRepository.deleteRepair(id)
        .then( () => {
            res.redirect('/repairs');
        });
};