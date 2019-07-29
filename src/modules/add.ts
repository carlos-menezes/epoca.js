/**
 * This function adds milliseconds to a timestamp.
 * @param ammount Number of milliseconds to add to the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function addMilliseconds(timestamp: number, ammount: number): Date {
  const newTimestamp = timestamp + ammount;
  return new Date(newTimestamp);
}

/**
 * This function adds seconds to a timestamp.
 * @param ammount Number of seconds to add to the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function addSeconds(timestamp: number, ammount: number): Date {
  return this.addMilliseconds(timestamp, ammount * 1000);
}

/**
 * This function adds minutes to a timestamp.
 * @param ammount Number of minutes to add to the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function addMinutes(timestamp: number, ammount: number): Date {
  return this.addMilliseconds(timestamp, ammount * 60000);
}

/**
 * This function adds hours to a timestamp.
 * @param ammount Number of hours to add to the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function addHours(timestamp: number, ammount: number): Date {
  return this.addMilliseconds(timestamp, ammount * 3600000);
}

/**
 * This function adds days to a timestamp.
 * @param ammount Number of days to add to the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function addDays(timestamp: number, ammount: number): Date {
  return this.addMilliseconds(timestamp, ammount * 86400000);
}

/**
 * This function adds years to a timestamp.
 * @param ammount Number of years to add to the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function addYears(timestamp: number, ammount: number): Date {
  return this.addMilliseconds(timestamp, ammount * 31536000000);
}

/**
 * This function adds leap years to a timestamp.
 * @param ammount Number of leap years to add to the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function addLeapYears(timestamp: number, ammount: number): Date {
  return this.addMilliseconds(timestamp, ammount * 31622400000);
}

export {
  addMilliseconds,
  addSeconds,
  addHours,
  addMinutes,
  addDays,
  addYears,
  addLeapYears
};
