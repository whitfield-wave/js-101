const MIN_IN_DAY = 1440;
const MIN_IN_HR = 60;
const HRS_IN_DAY = 24;

function parseTimeString(time) {
    return {hours: Number(time.slice(0, 2)), minutes: Number(time.slice(3))};
}

function afterMidnight(clockTime) {
    let time = parseTimeString(clockTime);
    let hoursToMin = time.hours === HRS_IN_DAY ? 0 : time.hours  * MIN_IN_HR;
    return hoursToMin + time.minutes;
}
function beforeMidnight(clockTime) {
    let time = parseTimeString(clockTime);
    let hoursToMin = time.hours * MIN_IN_HR;
    return hoursToMin + time.minutes > 0 ? MIN_IN_DAY - (hoursToMin + time.minutes) : 0;
}

