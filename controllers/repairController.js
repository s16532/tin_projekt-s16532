exports.showRepairList = (req, res, next) => {
    res.render('pages/vehicle/list', {});
}

exports.showAddRepairForm = (req, res, next) => {
    res.render('pages/vehicle/form', {});
}

exports.showRepairDetails = (req, res, next) => {
    res.render('pages/vehicle/details', {});
}