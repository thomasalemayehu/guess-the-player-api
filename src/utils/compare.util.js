const compareAnswer = (guessedPlayer, sessionPlayer) => {
  const guessedAge = new Date().getFullYear() - guessedPlayer.yearOfBirth;
  const actualAge = new Date().getFullYear() - sessionPlayer.yearOfBirth;

  return {
    nationalityCheck: guessedPlayer.nationality === sessionPlayer.nationality,
    positionCheck: guessedPlayer.position === sessionPlayer.position,
    teamCheck: guessedPlayer.team.name === sessionPlayer.team,
    ageCheck: actualAge - guessedAge,
    shirtNumberCheck: sessionPlayer.shirtNumber - guessedPlayer.shirtNumber,
    leagueCheck: guessedPlayer.team.league === sessionPlayer.league,
  };
};

module.exports = { compareAnswer };
