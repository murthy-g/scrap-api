const router = require('express').Router();
const userRouter = require('./user');
const pinCodeRouter = require('./pincode');
const servicesOfferedRouter = require('./services_offered');

router.use('/user', userRouter);
router.use('/pincode', pinCodeRouter);
router.use('/servicesoffered', servicesOfferedRouter);

module.exports = router;
