const express = require('express');
const router  = express.Router();

const locationController = require('../controllers/locationController');

router.get('/', function(req, res, next){
    res.render('pages/location/list', { navLocation: 'loc' });
});

router.get('/', locationController.showLocationList );
router.get('/add', locationController.showAddLocationForm);
router.get('/details/:locationId', locationController.showLocationDetails);

module.exports = router;