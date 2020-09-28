function dirReduc(arr) {
    const opposite = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        EAST: 'WEST',
        WEST: 'EAST',
    };
    return arr.reduce((steps, dir) => {
        if (steps[steps.length - 1] === opposite[dir]) {
            steps.pop();
        } else {
            steps.push(dir);
        }
        return steps;
    }, []);
}

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST']);
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST']);
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
console.log(dirReduc([]), []);
