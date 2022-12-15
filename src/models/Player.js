/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Player name is required.'],
    unique: [true],
    minLength: [3, 'Player name must be at least 3 characters long.'],
  },
  nationality: {
    type: String,
    required: [true, 'Player nationality is required.'],
    minLength: [3, 'Player nationality must be at least 3 characters long.'],
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  position: {
    type: String,
    required: true,
    enum: {
      values: ['GK', 'DEF', 'MID', 'FWD'],
      message: '{VALUE} is not supported for player position',
    },
  },
  yearOfBirth: {
    type: Number,
    required: true,
    min: 1950,
  },
  shirtNumber: {
    type: Number,
    required: true,
    min: 0,
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
