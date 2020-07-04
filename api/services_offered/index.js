const ServicesOfferedSchema = require('../../model/servicesoffered.model');
const mongoose = require('mongoose');
const router = require('express').Router();

const ServicesOffered = mongoose.model(
  'services_offered',
  ServicesOfferedSchema,
  'services_offered'
);

router.get('/', async (req, res) => {
  await ServicesOffered.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
