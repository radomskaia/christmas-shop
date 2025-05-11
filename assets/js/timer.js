const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;

let timerIntervalId;
const elements = {};
[elements.days, elements.hours, elements.minutes, elements.seconds] =
  document.querySelectorAll(".timer-items_number");
const previousValues = {};

function getTime(date, divider) {
  return Math.floor(date / divider);
}

function updateTextContent(type, newValues) {
  if (newValues[type] !== previousValues[type]) {
    elements[type].textContent = `${newValues[type]}`;
    previousValues[type] = newValues[type];
  }
}

function updateTimer(finalDate) {
  let dateDifference = finalDate - Date.now();
  if (dateDifference <= 0) {
    clearInterval(timerIntervalId);
  }
  let newValues = {};
  newValues.days = getTime(dateDifference, MS_IN_DAY);
  dateDifference %= MS_IN_DAY;
  newValues.hours = getTime(dateDifference, MS_IN_HOUR);
  dateDifference %= MS_IN_HOUR;
  newValues.minutes = getTime(dateDifference, MS_IN_MINUTE);
  dateDifference %= MS_IN_MINUTE;
  newValues.seconds = getTime(dateDifference, MS_IN_SECOND);

  updateTextContent("days", newValues);
  updateTextContent("hours", newValues);
  updateTextContent("minutes", newValues);
  updateTextContent("seconds", newValues);
}

export function timer() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const NYDate = new Date(`${nextYear}-01-01T00:00:00.000Z`).getTime();
  updateTimer(NYDate);
  timerIntervalId = setInterval(updateTimer, 1000, NYDate);
}
