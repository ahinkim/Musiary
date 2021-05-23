const currentYYYYMMDD = (seperator = "-") => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = today.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}${seperator}${month}${seperator}${day}`;
};

const removeTimeFromDate = (date) => {
  return date.split("T")[0];
};

const DateUtil = { currentYYYYMMDD, removeTimeFromDate };

export default DateUtil;
