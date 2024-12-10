const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;

let timerIntervalId;
const [daysEl, hoursEl, minEl, secEl] = document.querySelectorAll('.timer-items_number');

function getTime(date, divider) {
    return Math.floor(date / divider);
}

function updateTimer(finalDate) {
    let dateDifference = finalDate - Date.now();
    if (dateDifference <= 0) {
        clearInterval(timerIntervalId);
    }

    daysEl.textContent = getTime(dateDifference, MS_IN_DAY);
    dateDifference %= MS_IN_DAY;
    hoursEl.textContent = getTime(dateDifference, MS_IN_HOUR);
    dateDifference %= MS_IN_HOUR;
    minEl.textContent = getTime(dateDifference, MS_IN_MINUTE);
    dateDifference %= MS_IN_MINUTE;
    secEl.textContent = getTime(dateDifference, MS_IN_SECOND);
}

export function timer() {

    const NYDate = +new Date('2025-01-01T00:00:00.000Z');
    timerIntervalId = setInterval(updateTimer, 1000, NYDate)
}
