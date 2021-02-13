const EmployeeRepository = require('../repository/sequelize/EmployeeRepository');
const authUtil = require('../util/authUtils');

exports.login = (req, res, next) => {
    const uname = req.body.uname;
    const passwd = req.body.passwd;
    EmployeeRepository.findByUname(uname)
        .then(emp => {
            if(!emp) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowa nazwa użytkownika lub hasło"
                })
            } else if(authUtil.comparePasswords(passwd, emp.passwd) === true) {
                req.session.loggedUser = emp;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowa nazwa użtkownika lub hasło"
                })
            }
        })
        .catch(err => {
            console.log(err);
        });

}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}