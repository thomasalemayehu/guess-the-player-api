/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
  name: {
    type: String,
  },
  nationality: {
    type: String,
  },
  team: {
    type: String,
  },
  position: {
    type: String,
  },
  yearOfBirth: {
    type: Number,
  },
  shirtNumber: {
    type: Number,
  },
  attempts: {
    type: Number,
    default: 0,
  },
});

sessionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
