function firstDayWeek(week, year) {

    year = parseInt(year);


    let jan1 = new Date(year, 0, 1);

    let jan1Day = jan1.getDay();

    let firstMonday = new Date(year, 0, 1 + (jan1Day === 0 ? 1 : 8 - jan1Day));

    let targetDate = new Date(firstMonday);
    targetDate.setDate(firstMonday.getDate() + (week - 1) * 7);

    if (targetDate.getFullYear() < year) {
        targetDate = new Date(year, 0, 1);
    }

    let dd = String(targetDate.getDate()).padStart(2, '0');
    let mm = String(targetDate.getMonth() + 1).padStart(2, '0');
    let yyyy = targetDate.getFullYear();

    return `${dd}-${mm}-${yyyy}`;
}

// // Example usage:
// console.log(firstDayWeek(1, "2023"));  
// console.log(firstDayWeek(52, "2023"));
// console.log(firstDayWeek(1, "2024"));  