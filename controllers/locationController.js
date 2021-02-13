const LocationRepository = require('../repository/sequelize/LocationRepository');

exports.showLocationList = (req, res, next) => {
    LocationRepository.getLocations()
        .then(locs => {
            res.render('pages/location/list', {
                locs: locs,
                navLocation: 'loc'
            });
        });
}

exports.showAddLocationForm = (req, res, next) => {
    res.render('pages/location/form', {
        loc: {},
        formMode: 'createNew',
        pageTitle: 'Nowy warsztat',
        btnLabel: 'Dodaj warsztat',
        formAction: '/locations/add',
        navLocation: 'loc',
        validationErrors: []
    });
}

exports.showEditLocationForm = (req, res, next) => {
    const locId = req.params.locationId;
    LocationRepository.getLocationById(locId)
        .then(loc => {
            res.render('pages/location/form', {
                loc: loc,
                formMode: 'edit',
                pageTitle: 'Edycja warsztatu',
                btnLabel: 'Edytuj warsztat',
                formAction: '/locations/edit',
                navLocation: 'loc',
                validationErrors: [],
            })
        });
}

exports.showLocationDetails = (req, res, next) => {
    const locId = req.params.locationId;
    LocationRepository.getLocationById(locId)
        .then(loc => {
            res.render('pages/location/form', {
                loc: loc,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły warsztatu',
                formAction: '',
                navLocation: 'loc',
            })
        });
}

exports.addLocation = (req, res, next) => {
    const locData = { ...req.body };
    LocationRepository.createLocation(locData)
        .then( result => {
            res.redirect('/locations');
        });
};

exports.updateLocation = (req, res, next) => {
    const locId = req.body.id;
    const locData = { ...req.body };
    LocationRepository.updateLocation(locId, locData)
        .then( result => {
            res.redirect('/locations');
        });
};

exports.deleteLocation = (req, res, next) => {
    const locId = req.params.locationId;
    LocationRepository.deleteLocation(locId)
        .then( () => {
            res.redirect('/locations');
        });
};