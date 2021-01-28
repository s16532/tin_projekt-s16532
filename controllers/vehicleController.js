exports.showVehicleList = (req, res, next) => {
    res.render('pages/repair/list', {});
}

exports.showAddVehicleForm = (req, res, next) => {
    res.render('pages/repair/form', {});
}

exports.showVehicleDetails = (req, res, next) => {
    res.render('pages/repair/details', {});
}