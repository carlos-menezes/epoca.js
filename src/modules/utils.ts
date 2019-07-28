/**
 * Get the relative time between two timestamps.
 * @param from Timestamp in milliseconds.
 * @param to Timestamp in milliseconds.
 * @returns {string} A string denoting the relative time between the two timestamps.
 */
function relativeDate(from: number, to: number): string {
  const delta = Math.round(from - to) / 1000;

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  const elapsed = from - to;

  if (elapsed >= 0) {
    if (elapsed < minute) {
      const time = Math.round(elapsed / 1000);
      const timeStr = time <= 1 ? `${time} second ago` : `${time} seconds ago`;
      return timeStr;
    } else if (elapsed < hour) {
      const time = Math.round(elapsed / minute);
      const timeStr = time <= 1 ? `${time} minute ago` : `${time} minutes ago`;
      return timeStr;
    } else if (elapsed < day) {
      const time = Math.round(elapsed / hour);
      const timeStr = time <= 1 ? `${time} hour ago` : `${time} hours ago`;
      return timeStr;
    } else if (elapsed < month) {
      const time = Math.round(elapsed / day);
      const timeStr = time <= 1 ? `${time} day ago` : `${time} days ago`;
      return timeStr;
    } else if (elapsed < year) {
      const time = Math.round(elapsed / month);
      const timeStr = time <= 1 ? `${time} month ago` : `${time} months ago`;
      return timeStr;
    } else {
      const time = Math.round(elapsed / year);
      const timeStr = time <= 1 ? `${time} year ago` : `${time} years ago`;
      return timeStr;
    }
  } else {
    const newElapsed = to - from;

    if (newElapsed < minute) {
      const time = Math.round(newElapsed / 1000);
      const timeStr = time <= 1 ? `in ${time} second` : `in ${time} seconds`;
      return timeStr;
    } else if (newElapsed < hour) {
      const time = Math.round(newElapsed / minute);
      const timeStr = time <= 1 ? `in ${time} minute` : `in ${time} minutes`;
      return timeStr;
    } else if (newElapsed < day) {
      const time = Math.round(newElapsed / hour);
      const timeStr = time <= 1 ? `in ${time} hour` : `in ${time} hours`;
      return timeStr;
    } else if (newElapsed < month) {
      const time = Math.round(newElapsed / day);
      const timeStr = time <= 1 ? `in ${time} day` : `in ${time} days`;
      return timeStr;
    } else if (newElapsed < year) {
      const time = Math.round(newElapsed / month);
      const timeStr = time <= 1 ? `in ${time} month` : `in ${time} months`;
      return timeStr;
    } else {
      const time = Math.round(newElapsed / year);
      const timeStr = time <= 1 ? `in ${time} year` : `in ${time} years`;
      return timeStr;
    }
  }
}

/**
 * Checks if a year is a leap year.
 * @param year The year to check.
 * @returns Returns a boolean.
 */
function isLeapYear(year): boolean {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }

  return false;
}

export { isLeapYear, relativeDate };
