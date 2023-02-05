const game = {
    team1: 'U23 Việt Nam',
    team2: 'Bayern Munich',
    players: [[
        'Nhâm Dũng Mạnh',
        'Bùi Hoàng Việt Anh',
        'Phan Tuấn Tài',
        'Nguyễn Tiến Linh',
        'Quan Văn Chuẩn',
        'Đỗ Hùng Dũng',
        'Nguyễn Văn Toản',
        'Nguyễn Hoàng Đức',
        'Dụng Quang Nho',
        'Vũ Tiến Long',
        'Nguyễn Văn Tùng',
        'Khuất Văn Khang',
        'Lê Văn Xuân',
        'Nguyễn Thanh Bình',
        'Trần Bảo Toàn',
        'Nguyễn Hai Long',
        'Lý Công Hoàng Anh',
        'Hồ Thanh Minh',
        'Nguyễn Văn Trường',
        'Lê Văn Đô',
    ],
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        'Burki',
        'Schulz',
        'Hummels',
        'Akaji',
        'Hakaimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
    ],
    ],
    score: '3:0',
    scored: ['Bùi Hoàng Việt Anh', 'Nguyễn Tiến Linh', 'Nguyễn Hoàng Đức'],
    date: 'Nov 9th, 2033',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// 1. 
for (const [i, player] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);
// 2. 
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
// 3. 
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}