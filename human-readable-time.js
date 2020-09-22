const humanReadable = (time) => {
    const HH = ('0' + Math.floor(time / 3600)).slice(-2);
    const MM = ('0' + Math.floor(time / 60 % 60)).slice(-2);
    const SS = ('0' + Math.floor(time % 60)).slice(-2);
    return `${HH}:${MM}:${SS}`;
}


console.log(humanReadable(0), '00:00:00');
console.log(humanReadable(5), '00:00:05');
console.log(humanReadable(60), '00:01:00');
console.log(humanReadable(86399), '23:59:59');
console.log(humanReadable(359999), '99:59:59');
