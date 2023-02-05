
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussi Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martnez',
            'Alaba',
            'Davies',
            'Kinmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hunmels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',


        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hunmels'],
    date: 'Nov 9th,2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

};
//1

const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
//5
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);
//6
const printGoal = function (...players) {
    console.log(players);
    console.log(`${players.length} bàn thắng đã được ghi`);
};
// printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoal('Davies', 'Muller');
printGoal(...game.scored);

//7
team1 < team2 && console.log('Đội 1 dành chiến thắng');
team1 > team2 && console.log('Đội 2 dành chiến thắng');

//Challenge 2
//1.
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);

}

//2
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds)
    average += odd;
average /= odds.length;
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}
