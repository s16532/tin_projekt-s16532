exports.showEmployeeList = (req, res, next) => {
    res.render('pages/employee/list', {});
}

exports.showAddEmployeeForm = (req, res, next) => {
    res.render('pages/employee/form', {});
}

/*
exports.showEmployeeDetails = (req, res, next) => {
    res.render('pages/employee/details', {});
}
*/