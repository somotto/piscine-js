function dayOfTheYear(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }

    let totalDays = day;
    for (let i = 0; i < month; i++) {
        totalDays += daysInMonth[i];
    }

    return totalDays;
}

// console.log(dayOfTheYear(new Date('2024-10-08'))); 
// console.log(dayOfTheYear(new Date('0001-01-01'))); 
