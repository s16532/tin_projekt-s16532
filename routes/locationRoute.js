const express = require('express');
const router  = express.Router();

const locationController = require('../controllers/locationController');
const authUtils = require('../util/authUtils');

/*
router.get('/', function(req, res, next){
    res.render('pages/location/list', { navLocation: 'loc' });
});

router.get('/add', function(req, res, next){
    res.render('pages/location/form', { navLocation: 'loc' });
});

router.get('/details/:locationId', function(req, res, next){
    res.render('pages/location/details', { navLocation: 'loc' });
});
 */

router.get('/', locationController.showLocationList );
router.get('/add', authUtils.permitAuthenticatedUser, locationController.showAddLocationForm);
router.get('/edit/:locationId', authUtils.permitAuthenticatedUser, locationController.showEditLocationForm);
router.get('/details/:locationId', authUtils.permitAuthenticatedUser, locationController.showLocationDetails);

router.post('/add', authUtils.permitAuthenticatedUser, locationController.addLocation);
router.post('/edit', authUtils.permitAuthenticatedUser, locationController.updateLocation);
router.get('/delete/:locationId', authUtils.permitAuthenticatedUser, locationController.deleteLocation);

module.exports = router;