const express = require('express');
const router  = express.Router();

const locationController = require('../controllers/locationController');

router.get('/', function(req, res, next){
    res.render('pages/location/list', { navLocation: 'loc' });
});

router.get('/add', function(req, res, next){
    res.render('pages/location/form', { navLocation: 'loc' });
});

router.get('/details/:locationId', function(req, res, next){
    res.render('pages/location/details', { navLocation: 'loc' });
});

router.get('/', locationController.showLocationList );
router.get('/add', locationController.showAddLocationForm);
router.get('/details/:locationId', locationController.showLocationDetails);

module.exports = router;