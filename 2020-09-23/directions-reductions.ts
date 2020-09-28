function dirReduc(arr) {
    // if initial array is empty return it
    if (!arr.length) return arr;
    // lookup object
    const counterDirections = {
        north: 'south',
        south: 'north',
        east: 'west',
        west: 'east',
    };
    // place to store simplified directions
    const directions = [];
    // put first direction into directions array
    directions.push(arr[0]);
    // iterate over the directions
    for (let i = 1; i < arr.length; i++) {
        const dir = arr[i];
        // if last item from directions array is a counter direction pop it from array and skip current
        if (
            directions.length &&
            directions[directions.length - 1].toLowerCase() === counterDirections[dir.toLowerCase()]
        ) {
            directions.pop();
            continue;
        } else {
            // else push to directions array
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
