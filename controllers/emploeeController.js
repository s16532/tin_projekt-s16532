const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');

exports.showEmployeeList = (req, res, next) => {
    EmployeeRepository.getEmployees()
        .then(emps => {
            res.render('pages/employee/list', {
                emps: emps,
                navLocation: 'veh'
            });
        });
}

exports.showAddEmployeeForm = (req, res, next) => {
    res.render('pages/employee/form', {
        emp: {},
        formMode: 'createNew',
        pageTitle: 'Nowy pracownik',
        btnLabel: 'Dodaj pracownika',
        formAction: '/employees/add',
        navLocation: 'emp'
    });
}

exports.showEditEmployeeForm = (req, res, next) => {
    const id = req.params.empId;
    EmployeeRepository.getEmployeeById(id)
        .then(emp => {
            res.render('pages/employee/form', {
                emp: emp,
                formMode: 'edit',
                pageTitle: 'Edycja pracownika',
                btnLabel: 'Edytuj pracownika',
                formAction: '/employees/edit',
                navLocation: 'emp'
            })
        });
}

exports.showEmployeeDetails = (req, res, next) => {
    const id = req.params.empId;
    EmployeeRepository.getEmployeeById(id)
        .then(emp => {
            res.render('pages/employee/form', {
                emp: emp,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pracownika',
                formAction: '',
                navLocation: 'emp'
            })
        });
}

exports.addEmployee = (req, res, next) => {
    const data = { ...req.body };
    EmployeeRepository.createEmployee(data)
        .then( result => {
            res.redirect('/employees');
        });
};

exports.updateEmployee = (req, res, next) => {
    const id = req.body.id;
    const data = { ...req.body };
    EmployeeRepository.updateEmployee(id, data)
        .then( result => {
            res.redirect('/employees');
        });
};

exports.deleteEmployee = (req, res, next) => {
    const id = req.params.empId;
    EmployeeRepository.deleteEmployee(id)
        .then( () => {
            res.redirect('/employees');
        });
};