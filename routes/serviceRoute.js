const express = require('express');
const router  = express.Router();

const serviceController = require('../controllers/serviceController');
const authUtils = require('../util/authUtils');


/*
router.get('/', function(req, res, next){
    res.render('pages/service/list', { navLocation: 'rep' });
});

router.get('/add', function(req, res, next){
    res.render('pages/service/form', { navLocation: 'rep' });
});

router.get('/details/:serviceId', function(req, res, next){
    res.render('pages/service/details', { navLocation: 'rep' });
});
 */

router.get('/', serviceController.showServiceList );
router.get('/add', authUtils.permitAuthenticatedUser, serviceController.showAddServiceForm);
router.get('/edit/:serviceId', authUtils.permitAuthenticatedUser, serviceController.showEditServiceForm);
router.get('/details/:serviceId', authUtils.permitAuthenticatedUser, serviceController.showServiceDetails);

router.post('/add', authUtils.permitAuthenticatedUser, serviceController.addService);
router.post('/edit', authUtils.permitAuthenticatedUser, serviceController.updateService);
router.get('/delete/:serviceId', authUtils.permitAuthenticatedUser, serviceController.deleteService);

module.exports = router;