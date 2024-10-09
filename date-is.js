function isValid(date) {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  return date instanceof Date && !isNaN(date);
}

function isAfter(date1, date2) {
  return isValid(date1) && isValid(date2) && date1 > date2;
}

function isBefore(date1, date2) {
  return isValid(date1) && isValid(date2) && date1 < date2;
}

function isFuture(date) {
  return isValid(date) && date > new Date();
}

function isPast(date) {
  return isValid(date) && date < new Date();
}