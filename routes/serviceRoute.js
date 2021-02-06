const express = require('express');
const router  = express.Router();

const serviceController = require('../controllers/serviceController');

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
router.get('/add', serviceController.showAddServiceForm);
router.get('/edit/:serviceId', serviceController.showEditServiceForm);
router.get('/details/:serviceId', serviceController.showServiceDetails);

router.post('/add', serviceController.addService);
router.post('/edit', serviceController.updateService);
router.get('/delete/:serviceId', serviceController.deleteService);

module.exports = router;