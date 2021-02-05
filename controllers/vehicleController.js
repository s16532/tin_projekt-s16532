const VehicleRepository = require('../repository/sequelize/VehicleRepository');

exports.showVehicleList = (req, res, next) => {
    VehicleRepository.getVehicles()
        .then(vehs => {
            res.render('pages/vehicle/list', {
                vehs: vehs,
                navLocation: 'veh'
            });
        });
}

exports.showAddVehicleForm = (req, res, next) => {
    res.render('pages/vehicle/form', {
        veh: {},
        formMode: 'createNew',
        pageTitle: 'Nowy pojazd',
        btnLabel: 'Dodaj pojazd',
        formAction: '/vehicles/add',
        navLocation: 'veh'
    });
}

exports.showEditVehicleForm = (req, res, next) => {
    const id = req.params.vehicleId;
    VehicleRepository.getVehicleById(id)
        .then(veh => {
            res.render('pages/vehicle/form', {
                veh: veh,
                formMode: 'edit',
                pageTitle: 'Edycja pojazdu',
                btnLabel: 'Edytuj pojazd',
                formAction: '/vehicles/edit',
                navLocation: 'veh'
            })
        });
}

exports.showVehicleDetails = (req, res, next) => {
    const id = req.params.vehicleId;
    VehicleRepository.getVehicleById(id)
        .then(veh => {
            res.render('pages/vehicle/form', {
                veh: veh,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pojazdu',
                formAction: '',
                navLocation: 'veh'
            })
        });
}

exports.addVehicle = (req, res, next) => {
    const vehData = { ...req.body };
    VehicleRepository.createVehicle(vehData)
        .then( result => {
            res.redirect('/vehicles');
        });
};

exports.updateVehicle = (req, res, next) => {
    const id = req.body.id;
    const data = { ...req.body };
    VehicleRepository.updateVehicle(id, data)
        .then( result => {
            res.redirect('/vehicles');
        });
};

exports.deleteVehicle = (req, res, next) => {
    const id = req.params.vehicleId;
    VehicleRepository.deleteVehicle(id)
        .then( () => {
            res.redirect('/vehicles');
        });
};