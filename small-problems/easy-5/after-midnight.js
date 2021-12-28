function reduceMinutesToClockMinutes(minToAddSub) {
  const MIN_IN_DAYS = 1440;

  if (Math.abs(minToAddSub) > 1440) minToAddSub = minToAddSub % MIN_IN_DAYS; 

  if (minToAddSub >= 0) {
    return minToAddSub;
  } else { 
    return minToAddSub + MIN_IN_DAYS;
  }
}

function timeOfDay(min) {
  const MIN_IN_HR = 60;
  let timeInMin = reduceMinutesToClockMinutes(min);

  let hour = Math.floor(timeInMin / MIN_IN_HR);

  let minutes = timeInMin % MIN_IN_HR;
  
  return `${addEmptySpaceZero(hour)}:${addEmptySpaceZero(minutes)}`;

}

function addEmptySpaceZero(time) {
  return time < 10 ? `0${time}` : time;
}

