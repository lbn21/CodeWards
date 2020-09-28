function dirReduc(arr) {
    if (!arr.length)
        return arr;
    const counterDirections = {
        north: 'south',
        south: 'north',
        east: 'west',
        west: 'east',
    };
    const directions = [];
    directions.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        const dir = arr[i];
        if (directions.length &&
            directions[directions.length - 1].toLowerCase() === counterDirections[dir.toLowerCase()]) {
            directions.pop();
            continue;
        }
        else {
            directions.push(dir);
        }
    }
    return directions;
}
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
        }
        else {
            steps.push(dir);
        }
        return steps;
    }, []);
}
console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST']);
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST']);
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
console.log(dirReduc([]), []);
