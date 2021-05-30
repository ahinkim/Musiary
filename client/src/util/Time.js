const secToMin = (timeSec) => {
  timeSec = Math.floor(timeSec);
  let min = Math.floor(timeSec / 60);
  let sec = timeSec % 60;

  if (min < 10) {
    min = `0${min}`;
  } else {
    min = `${min}`;
  }

  if (sec < 10) {
    sec = `0${sec}`;
  } else {
    sec = `${sec}`;
  }

  return `${min}:${sec}`;
};

const timeUtil = { secToMin };

export default timeUtil;
