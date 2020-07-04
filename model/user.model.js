const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  email: {
    type: 'String',
    required: true,
    unique: true,
  },
  familyName: {
    type: 'String',
  },
  givenName: {
    type: 'String',
  },
  googleId: {
    type: 'String',
    required: true,
  },
  imageUrl: {
    type: 'String',
  },
  name: {
    type: 'String',
    required: true,
  },
  dateCreated: {
    type: Date,
  },
  dateUpdated: {
    type: Date,
  },
});

module.exports = UserModelSchema;
