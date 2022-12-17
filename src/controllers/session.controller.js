const Player = require('../models/Player');
const Session = require('../models/Session');
const compare = require('../utils/compare.util');

const selectPlayer = async (request, response) => {
  const players = await Player.find({}).populate('team');

  const selectedPlayerIndex = Math.floor(Math.random() * players.length);
  const selectedPlayer = players[selectedPlayerIndex];

  const newGameSession = new Session({
    name: selectedPlayer.name,
    nationality: selectedPlayer.nationality,
    position: selectedPlayer.position,
    yearOfBirth: selectedPlayer.yearOfBirth,
    shirtNumber: selectedPlayer.shirtNumber,
    team: selectedPlayer.team.name,
    league: selectedPlayer.team.league,
  });
  await newGameSession.save();

  response.status(200).json({ id: newGameSession.id });
};

const checkSession = async (request, response) => {
  const sessionId = request.params.id;
  const gameSession = await Session.findById(sessionId);

  if (gameSession.attempts >= process.env.MAX_ATTEMPT) {
    response.status(423).json({ message: 'Game Over', info: gameSession });
    return;
  }

  const { playerId } = request.body;
  const guessedPlayer = await Player.findById(playerId).populate('team');

  if (!gameSession) {
    response.status(404).json({ message: 'Game not found' });
    return;
  }

  const result = compare.compareAnswer(guessedPlayer, gameSession);

  gameSession.attempts += 1;
  await gameSession.save();
  const age = new Date().getFullYear() - guessedPlayer.yearOfBirth;

  response.status(200).json({
    ...result,
    attempts: gameSession.attempts,
    nationality: guessedPlayer.nationality,
    position: guessedPlayer.position,
    team: guessedPlayer.team.logo,
    shirtNumber: guessedPlayer.shirtNumber,
    league: guessedPlayer.team.leagueLogo,
    age,
  });
};

module.exports = { selectPlayer, checkSession };
