function dms(angle) {
  let degrees = parseInt(angle);
  let minutes = 0;
  let minutesRound = 0;
  let seconds = 0;
  if (degrees !== 0) {
    minutes = (angle % degrees) * 60;
    minutesRound = parseInt(minutes);
  } else {
    minutesRound = 0;
  }
  if (minutesRound !== 0) {
    seconds = ((minutes % minutesRound) * 60).toFixed();
  } else {
    seconds = 0;
  }


  return `${degrees}˚${String(minutesRound).length < 2 ? '0' + minutesRound : minutesRound}'${String(seconds).length < 2 ? '0' + seconds : seconds}";`
}
