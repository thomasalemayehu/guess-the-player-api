const playerRouter = require('express').Router();
const playerController = require('../controllers/player.controller');

playerRouter.post('/player', playerController.addPlayer);
playerRouter.get('/player', playerController.getPlayers);
playerRouter.get('/player/autocomplete', playerController.getPlayerByQuery);

module.exports = playerRouter;
