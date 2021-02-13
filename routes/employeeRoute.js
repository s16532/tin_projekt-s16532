const express = require('express');
const router  = express.Router();

const employeeController = require('../controllers/emploeeController');

/*
router.get('/', function(req, res, next){
    res.render('pages/employee/list', { navLocation: 'emp' });
});

router.get('/add', function(req, res, next){
    res.render('pages/employee/form', { navLocation: 'emp' });
});
 */

router.get('/', employeeController.showEmployeeList);
router.get('/add', employeeController.showAddEmployeeForm);
router.get('/edit/:empId', employeeController.showEditEmployeeForm);
router.get('/details/:empId', employeeController.showEmployeeDetails);

router.post('/add', employeeController.addEmployee);
router.post('/edit', employeeController.updateEmployee);
router.get('/delete/:empId', employeeController.deleteEmployee);

module.exports = router;