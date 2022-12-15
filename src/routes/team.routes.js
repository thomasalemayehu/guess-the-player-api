const teamRouter = require('express').Router();
const teamController = require('../controllers/team.controller');

teamRouter.post('/team', teamController.addTeam);
teamRouter.get('/team', teamController.getTeams);

module.exports = teamRouter;
