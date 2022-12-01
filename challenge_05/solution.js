const { data } = require('./data.js')

const battleRoyale = (players) => {
  const p = parseInt(players.length.toString(2).substring(1) + "0", 2);
  return [players[p], p];
}

const run = () => {
  const winner = battleRoyale(data);
  console.log(winner);
}

run()