const sessionRouter = require('express').Router();
const sessionController = require('../controllers/session.controller');

sessionRouter.get('/game/player', sessionController.selectPlayer);
sessionRouter.patch('/game/check/:id', sessionController.checkSession);
module.exports = sessionRouter;
