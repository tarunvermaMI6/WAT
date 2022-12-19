const router = require('express').Router(),
homeRoutes = require('./home.routes');
router.use('/api',homeRoutes);

module.exports = router;