const compareAnswer = (guessedPlayer, sessionPlayer) => {
  console.log(guessedPlayer, sessionPlayer);

  const guessedAge = new Date().getFullYear() - guessedPlayer.yearOfBirth;
  const actualAge = new Date().getFullYear() - sessionPlayer.yearOfBirth;

  console.log(sessionPlayer.shirtNumber, guessedPlayer.shirtNumber);

  return {
    nationality: guessedPlayer.nationality === sessionPlayer.nationality,
    position: guessedPlayer.position === sessionPlayer.position,
    team: guessedPlayer.team.name === sessionPlayer.team,
    age: actualAge - guessedAge,
    shirtNumber: sessionPlayer.shirtNumber - guessedPlayer.shirtNumber,
  };
};

module.exports = { compareAnswer };
