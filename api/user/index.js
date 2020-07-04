const UserModelSchema = require('../../model/user.model');
const mongoose = require('mongoose');
const router = require('express').Router();

const User = mongoose.model('User', UserModelSchema);

const findUserAndUpdate = (jsonBody, callback) => {
  jsonBody.dateCreated = new Date();
  jsonBody.dateUpdated = new Date();
  User.findOneAndUpdate(
    {email: jsonBody.email},
    jsonBody,
    {upsert: true, new: true, runValidators: true},
    (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    }
  );
};

router.post('/', (req, res) => {
  findUserAndUpdate(req.body, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
