const mongoose = require('mongoose');
const Player = require('../models/Player');
const Team = require('../models/Team');

const addPlayer = async (request, response) => {
  const {
    name, nationality, teamId, position, yearOfBirth, shirtNumber,
  } = request.body;

  const newPlayer = new Player({
    name,
    nationality,
    team: mongoose.Types.ObjectId(teamId),
    position,
    yearOfBirth,
    shirtNumber,
  });
  const savedPlayer = await newPlayer.save();

  const playerTeam = await Team.findOne({ id: teamId });
  playerTeam.players = playerTeam.players.concat(
    mongoose.Types.ObjectId(savedPlayer.id),
  );
  await playerTeam.save();

  response.status(201).json(savedPlayer);
};

const getPlayers = async (_, response) => {
  const players = await Player.find().populate('team');

  response.status(200).json(players);
};

const getPlayerByQuery = async (request, response) => {
  const queryString = request.query.query;

  const players = await Player.find({ name: { $regex: queryString } }).populate('team');

  response.status(200).json(players);
};
module.exports = { addPlayer, getPlayers, getPlayerByQuery };
