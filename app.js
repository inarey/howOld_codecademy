// Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:
const howOld = (age, year) => {
  // Calculate the currentYear first to get the year diffrence
  let dateToday = new Date();
  let currentYear = dateToday.getFullYear();

  const yearDifference = year - currentYear;
  const newAge = age + yearDifference;

  if (newAge > age) {
    // If the year is in the future, you should return a string in the following format:
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    // If the year is before they were born, you should return a string in the following format:
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    // If the year is in the past but not before the person was born, you should return a string in the following format:
    return `You were ${newAge} in the year ${year}`;
  }
};
// Once your function is written, write function calls to test your code!
console.log(howOld(47, 2024));
