const RepairServiceRepository = require('../repository/sequelize/RepairServiceRepository');
const ServiceRepository = require('../repository/sequelize/ServiceRepository');
const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');

exports.showRepairServiceList = (req, res, next) => {
    RepairServiceRepository.getRepairServices()
        .then(repServs => {
            res.render('pages/repairsService/list', {
                repServs: repServs,
                navRepairService: 'repServ'
            });
        });
}

exports.showAddRepairServiceForm = (req, res, next) => {
    const repId = req.params.repairId;
    let allServices, allEmps;
    ServiceRepository.getServices()
        .then(services => {
            allServices = services;
            return EmployeeRepository.getEmployees()
        })
        .then( emps => {
            allEmps = emps;
            res.render('pages/repairService/form', {
                repServ: {},
                formMode: 'createNew',
                pageTitle: 'Dodawanie usługi',
                btnLabel: 'Dodaj usługę',
                formAction: '/repairsServices/add',
                navLocation: 'rep',
                validationErrors: [],
                repId: repId,
                allServices: allServices,
                allEmps: allEmps,
            });

        })
}

exports.showEditRepairServiceForm = (req, res, next) => {
    const repId = req.params.repairId;
    const repServId = req.params.repairServiceId;
    let allServices, allEmps;
    ServiceRepository.getServices()
        .then(services => {
            allServices = services;
            return EmployeeRepository.getEmployees()
        })
        .then( emps => {
            allEmps = emps;
            return RepairServiceRepository.getRepairServiceById(repServId)
        })
        .then(repServ => {
            res.render('pages/repairService/form', {
                repServ: repServ,
                formMode: 'edit',
                pageTitle: 'Edycja usługi',
                btnLabel: 'Edytuj usługę',
                formAction: '/repairsServices/edit',
                navLocation: 'rep',
                validationErrors: [],
                repId: repId,
                allServices: allServices,
                allEmps: allEmps,

            })
        });
}

exports.showRepairServiceDetails = (req, res, next) => {
    const repId = req.params.repairId;
    const repServId = req.params.repairServiceId;
    let allServices, allEmps;
    ServiceRepository.getServices()
        .then(services => {
            allServices = services;
            return EmployeeRepository.getEmployees()
        })
        .then( emps => {
            allEmps = emps;
            return RepairServiceRepository.getRepairServiceById(repServId)
        })
        .then(repServ => {
            res.render('pages/repairService/form', {
                repServ: repServ,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły usługi',
                formAction: '',
                navLocation: 'rep',
                repId: repId,
                allServices: allServices,
                allEmps: allEmps,
            })
        });
}

exports.addRepairService = (req, res, next) => {
    const repServData = { ...req.body };
    RepairServiceRepository.createRepairService(repServData)
        .then( result => {
            res.redirect('/repairs/details/' + req.body.repair_id);
        });
};

exports.updateRepairService = (req, res, next) => {
    const repServId = req.body.id;
    const repServData = { ...req.body };
    RepairServiceRepository.updateRepairService(repServId, repServData)
        .then( result => {
            res.redirect('/repairs/details/' + req.body.repair_id);
        });
};

exports.deleteRepairService = (req, res, next) => {
    const repServId = req.params.repairServiceId;
    RepairServiceRepository.deleteRepairService(repServId)
        .then( () => {
            res.redirect('/repairs/details/' + req.body.repair_id);
        });
};