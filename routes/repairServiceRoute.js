const express = require('express');
const router  = express.Router();

const repairServiceController = require('../controllers/repairServiceController');

/*
router.get('/', function(req, res, next){
    res.render('pages/repair/list', { navLocation: 'rep' });
});
 */

//router.get('/add', function(req, res, next){
//   res.render('pages/repairService/form', { navLocation: 'rep' });
//});

/*
router.get('/details/:repairId', function(req, res, next){
    res.render('pages/repairService/details', { navLocation: 'rep' });
});
 */


//router.get('/', repairServiceController.showLocationList );
router.get('/add/:repairId', repairServiceController.showAddRepairServiceForm);
router.get('/edit/:repairServiceId', repairServiceController.showEditRepairServiceForm);
router.get('/details/:repairServiceId', repairServiceController.showRepairServiceDetails);

router.post('/add', repairServiceController.addRepairService);
router.post('/edit', repairServiceController.updateRepairService);
router.get('/delete/:repairServiceId', repairServiceController.deleteRepairService);


module.exports = router;