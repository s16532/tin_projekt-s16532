const express = require('express');
const router  = express.Router();

const vehicleController = require('../controllers/vehicleController');

/*
router.get('/', function(req, res, next){
    res.render('pages/vehicle/list', { navLocation: 'veh' });
});

router.get('/add', function(req, res, next){
    res.render('pages/vehicle/form', { navLocation: 'veh' });
});

router.get('/details/:vehicleId', function(req, res, next){
    res.render('pages/vehicle/details', { navLocation: 'veh' });
});
 */

router.get('/', vehicleController.showVehicleList );
router.get('/add', vehicleController.showAddVehicleForm);
router.get('/edit/:vehicleId', vehicleController.showEditVehicleForm);
router.get('/details/:vehicleId', vehicleController.showVehicleDetails);

router.post('/add', vehicleController.addVehicle);
router.post('/edit', vehicleController.updateVehicle);
router.get('/delete/:vehicleId', vehicleController.deleteVehicle);

module.exports = router;