const weirdReverse = (a) => a.sort((a) => 1);
console.log(weirdReverse([1, 2, 3, 'a', 'b', 'c', []]), [[], 'c', 'b', 'a', 3, 2, 1]);
