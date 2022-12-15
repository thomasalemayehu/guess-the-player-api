/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  nationality: {
    type: String,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  position: {
    type: String,
    enum: {
      values: ['GK', 'DEF', 'MID', 'FWD'],
      message: '{VALUE} is not supported for player position',
    },
  },
  yearOfBirth: {
    type: Number,
  },
  shirtNumber: {
    type: Number,
  },
});

playerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
