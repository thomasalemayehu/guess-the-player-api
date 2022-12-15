const Team = require('../models/Team');

const addTeam = async (request, response) => {
  const { name, league } = request.body;

  const newTeam = new Team({
    name,
    league,
    logo: `images/team/${name.split(' ').join('')}.png`,
    leagueLogo: `images/league/${league.split(' ').join('')}.png`,
  });
  const savedTeam = await newTeam.save();

  response.status(201).json(savedTeam);
};

const getTeams = async (_, response) => {
  const teams = await Team.find().populate('players');

  response.status(200).json(teams);
};

module.exports = { addTeam, getTeams };
