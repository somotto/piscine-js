function firstDayWeek(week, year) {
    year = parseInt(year.padStart(4, '0'));

    let dec28 = new Date(Date.UTC(year - 1, 11, 28));

    let dec28Day = dec28.getUTCDay();

    let firstMonday = new Date(Date.UTC(year - 1, 11, 28 + (dec28Day === 0 ? 1 : 8 - dec28Day)));

    let targetDate = new Date(firstMonday);
    targetDate.setUTCDate(firstMonday.getUTCDate() + (week - 1) * 7);

    if (targetDate.getUTCFullYear() < year) {
        targetDate = new Date(Date.UTC(year, 0, 1));
    }

    let dd = String(targetDate.getUTCDate()).padStart(2, '0');
    let mm = String(targetDate.getUTCMonth() + 1).padStart(2, '0');
    let yyyy = String(targetDate.getUTCFullYear()).padStart(4, '0');

    return `${dd}-${mm}-${yyyy}`;
}

// Example usage:
// console.log(firstDayWeek(1, "0001")); // Should return "01-01-0001"
// console.log(firstDayWeek(2, "0001")); // Should return "08-01-0001"
// console.log(firstDayWeek(1, "1000")); // Should return "01-01-1000"
// console.log(firstDayWeek(1, "2023")); // Should return "02-01-2023"
// console.log(firstDayWeek(52, "2023")); // Should return "25-12-2023"
// console.log(firstDayWeek(1, "2024")); // Should return "01-01-2024"