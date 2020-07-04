const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ServicesOfferedSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    default: 0,
  },
  pincode: {
    type: Number,
    required: true,
  },
});

module.exports = ServicesOfferedSchema;
