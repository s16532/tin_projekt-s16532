const express = require('express');
const router  = express.Router();

const repairServiceController = require('../controllers/repairServiceController');

/*
router.get('/', function(req, res, next){
    res.render('pages/repair/list', { navLocation: 'rep' });
});
 */

router.get('/add', function(req, res, next){
    res.render('pages/repairService/form', { navLocation: 'rep' });
});

/*
router.get('/details/:repairId', function(req, res, next){
    res.render('pages/repairService/details', { navLocation: 'rep' });
});
 */

//router.get('/', repairController.showRepairList );
router.get('/add', repairServiceController.showAddRepairForm);
//router.get('/details/:repairId', repairController.showRepairDetails);

module.exports = router;