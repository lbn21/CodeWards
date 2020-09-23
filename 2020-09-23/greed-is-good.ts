function score(dice) {
    const scores = {
        1: { 1: 100, bonus: 700 },
        2: { 3: 200 },
        3: { 3: 300 },
        4: { 3: 400 },
        5: { 1: 50, bonus: 350 },
        6: { 3: 600 },
    };

    const counts = {};

    let totalScore = 0;
    for (let i = 0; i < dice.length; i++) {
        const side = dice[i];
        counts[side] = counts[side] || { total: 0, current: 0 };
        counts[side]['current']++;
        counts[side]['total']++;
        const match = scores[side][counts[side]['current']];
        if (match) {
            totalScore += match;
            counts[side]['current'] -= counts[side]['current'];
        }
        if (counts[side]['total'] % 3 === 0 && scores[side]['bonus']) {
            totalScore += scores[side]['bonus'];
        }
    }
    return totalScore;
}
console.log(score([2, 3, 4, 6, 2]), 0);
console.log(score([1, 1, 1, 1, 3]), 1100);
console.log(score([1, 1, 1, 1, 5]), 1150);
console.log(score([1, 5, 1, 3, 4]), 250);
console.log(score([4, 4, 4, 3, 3]), 400);
console.log(score([3, 3, 3, 3, 3]), 300);
