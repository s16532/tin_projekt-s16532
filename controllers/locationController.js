exports.showLocationList = (req, res, next) => {
    res.render('pages/location/list', {});
}

exports.showAddLocationForm = (req, res, next) => {
    res.render('pages/location/form', {});
}

exports.showLocationDetails = (req, res, next) => {
    res.render('pages/location/details', {});
}