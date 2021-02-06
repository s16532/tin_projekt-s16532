const express = require('express');
const router  = express.Router();

const repairController = require('../controllers/repairController');

/*
router.get('/', function(req, res, next){
    res.render('pages/repair/list', { navLocation: 'rep' });
});

router.get('/add', function(req, res, next){
    res.render('pages/repair/form', { navLocation: 'rep' });
});

router.get('/details/:repairId', function(req, res, next){
    res.render('pages/repair/details', { navLocation: 'rep' });
});
 */

router.get('/', repairController.showRepairList );
router.get('/add', repairController.showAddRepairForm);
router.get('/edit/:repairId', repairController.showEditRepairForm);
router.get('/details/:repairId', repairController.showRepairDetails);

router.post('/add', repairController.addRepair);
router.post('/edit', repairController.updateRepair);
router.get('/delete/:repairId', repairController.deleteRepair);

module.exports = router;