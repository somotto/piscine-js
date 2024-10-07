function firstDayWeek(week, year) {
    year = parseInt(year);

    let jan1 = new Date(year, 0, 1);

    let jan1Day = jan1.getDay();

    let firstMonday = new Date(year, 0, 1 + (jan1Day === 1 ? 0 : 8 - jan1Day));
    let targetDate = new Date(firstMonday);
    targetDate.setDate(firstMonday.getDate() + (week - 1) * 7);

    if (targetDate.getFullYear() < year) {
        targetDate = new Date(year, 0, 1);
    }

    let dd = String(targetDate.getDate()).padStart(2, '0');
    let mm = String(targetDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    let yyyy = String(targetDate.getFullYear()).padStart(4, '0');

    return `${dd}-${mm}-${yyyy}`;
}

// // Example usage:
// console.log(firstDayWeek(1, "0001")); // Should return "01-01-0001"
// console.log(firstDayWeek(2, "0001")); // Should return "08-01-0001"
// console.log(firstDayWeek(1, "2023")); // Should return "02-01-2023"
// console.log(firstDayWeek(52, "2023")); // Should return "25-12-2023"
// console.log(firstDayWeek(1, "2024")); // Should return "01-01-2024"