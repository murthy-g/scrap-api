const PinCodeSchema = require('../../model/pincode.model');
const mongoose = require('mongoose');
const router = require('express').Router();

const PinCode = mongoose.model('pincode', PinCodeSchema, 'pincode');

router.get('/', async (req, res) => {
  await PinCode.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
