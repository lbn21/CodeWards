function dirReduc(arr) {
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
        const direction = arr[i].toLowerCase();
        counts[direction] = counts[direction] || 0;
        counts[direction]++;
    }
    console.log(counts);
}
console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST']);
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST']);
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
