function formatDuration(time) {
    // return now if zero
    if (time === 0) return 'now';
    // place to store final human readable string
    let humanReadableDuration = '';
    // place to store valid units
    const validOnlyUnits = [];
    // place to store units in order of importance year, day, hour, minute, second
    const units = {
        year: { duration: 0, singular: 'year', plural: 'years' },
        days: { duration: 0, singular: 'day', plural: 'days' },
        hours: { duration: 0, singular: 'hour', plural: 'hours' },
        minutes: { duration: 0, singular: 'minute', plural: 'minutes' },
        seconds: { duration: 0, singular: 'second', plural: 'seconds' },
    };
    // calculate units from given seconds
    units['year']['duration'] = Math.floor(time / (3600 * 24 * 365));
    units['days']['duration'] = Math.floor((time % (3600 * 24 * 365)) / (3600 * 24));
    units['hours']['duration'] = Math.floor((time % (3600 * 24)) / 3600);
    units['minutes']['duration'] = Math.floor((time % 3600) / 60);
    units['seconds']['duration'] = time % 60;
    // iterate over the units and attach labels
    for (const type in units) {
        // if unit is equal to zero skip
        // if unit is greater then 1 pluralise
        // else use singular
        const current = units[type];
        if (current.duration > 0) {
            const validUnit = `${current.duration} ${current.duration > 1 ? current.plural : current.singular}`;
            validOnlyUnits.push(validUnit);
        }
    }

    // construct final sentence
    for (let i = 0; i < validOnlyUnits.length; i++) {
        const unit = validOnlyUnits[i];
        humanReadableDuration += unit;
        // if not final item add comma
        // else add "and"
        if (i < validOnlyUnits.length - 2) {
            humanReadableDuration += ', ';
        } else if (i === validOnlyUnits.length - 2) {
            humanReadableDuration += ' and ';
        }
    }

    //return formatted duration
    return humanReadableDuration;
}

console.log(formatDuration(1), '1 second');
console.log(formatDuration(62), '1 minute and 2 seconds');
console.log(formatDuration(120), '2 minutes');
console.log(formatDuration(3600), '1 hour');
console.log(formatDuration(3662), '1 hour, 1 minute and 2 seconds');
