/**
 * This function subtracts milliseconds from a timestamp.
 * @param ammount Number of milliseconds to subtract from the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function subMilliseconds(timestamp: number, ammount: number): Date {
  const newTimestamp = timestamp - ammount;
  return new Date(newTimestamp);
}

/**
 * This function subtracts seconds from a timestamp.
 * @param ammount Number of seconds to subtract from the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function subSeconds(timestamp: number, ammount: number): Date {
  return this.subMilliseconds(timestamp, ammount * 1000);
}

/**
 * This function subtracts minutes from a timestamp.
 * @param ammount Number of minutess to subtract from the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function subMinutes(timestamp: number, ammount: number): Date {
  return this.subMilliseconds(timestamp, ammount - 60000);
}

/**
 * This function subtracts hours from a timestamp.
 * @param ammount Number of hours to subtract from the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function subHours(timestamp: number, ammount: number): Date {
  return this.subMilliseconds(timestamp, ammount * 3600000);
}

/**
 * This function subtracts days from a timestamp.
 * @param ammount Number of days to subtract from the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function subDays(timestamp: number, ammount: number): Date {
  return this.subMilliseconds(timestamp, ammount * 86400000);
}

/**
 * This function subtracts years from a timestamp.
 * @param ammount Number of years to subtract from the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function subYears(timestamp: number, ammount: number): Date {
  return this.subMilliseconds(timestamp, ammount * 31536000000);
}

/**
 * This function subtracts leap years from a timestamp.
 * @param ammount Number of leap years to subtract from the timestamp.
 * @returns {Date} A new Date instance with the new timestamp.
 */
function subLeapYears(timestamp: number, ammount: number): Date {
  return this.subMilliseconds(timestamp, ammount * 31622400000);
}

export {
  subMilliseconds,
  subSeconds,
  subMinutes,
  subHours,
  subDays,
  subMonths,
  subYears,
  subLeapYears
};
