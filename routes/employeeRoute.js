const express = require('express');
const router  = express.Router();

const employeeController = require('../controllers/emploeeController');

router.get('/', employeeController.showEmployeeList);
router.get('/add', employeeController.showAddEmployeeForm);
//router.get('/details/:empId', employeeControler.showEmployeeDetails);