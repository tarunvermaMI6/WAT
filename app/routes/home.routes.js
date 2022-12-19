const router = require('express').Router(),
homeContr = require('../controllers/home.controller');

router.get('/home',homeContr.home);
router.get('/getTestTakerToday.lol',homeContr.getTestTakerToday);
router.get('/testTakerBetweenTwoDates.lol',homeContr.testTakerBetweenTwoDates);

module.exports = router;
