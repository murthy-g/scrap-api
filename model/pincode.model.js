const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PinCodeSchema = new Schema({
  items: {
    type: String,
    required: true,
  },
  properties: {
    type: Array,
  },
  geometry: {
    type: Array,
  },
});

module.exports = PinCodeSchema;
