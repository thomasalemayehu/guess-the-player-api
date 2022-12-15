/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    unique: [true, '{VALUE} already registered.'],
    required: [true, 'Team name is required.'],
    minLength: [3, 'Team name must be at least 3 characters long.'],
  },
  logo: {
    type: String,
    required: [true, 'Team logo is required.'],
    minLength: [5, 'Team logo must be at least 5 characters long.'],
  },
  league: {
    type: String,
    required: [true, 'Team league is required.'],
    minLength: [3, 'Team logo must be at least 5 characters long.'],
  },
  leagueLogo: {
    type: String,
    required: [true, 'Team league logo is required.'],
    minLength: [5, 'Team league logo must be at least 5 characters long.'],
  },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
});
teamSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
