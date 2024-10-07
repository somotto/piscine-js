function firstDayWeek(weekNumber, year) {
    const yearInt = parseInt(year, 10);

    const firstDayOfYear = new Date(yearInt, 0, 1);

    const firstMondayOfYear = firstDayOfYear.getDay() === 1 ? firstDayOfYear : new Date(firstDayOfYear.setDate(firstDayOfYear.getDate() + (8 - firstDayOfYear.getDay()) % 7));

    const firstDayOfWeek = new Date(firstMondayOfYear);
    firstDayOfWeek.setDate(firstMondayOfYear.getDate() + (weekNumber - 1) * 7);
    
    if (weekNumber > 53 && firstDayOfWeek.getFullYear() === yearInt) {
        return formatDate(firstDayOfWeek);
    }

    const formattedDate = formatDate(firstDayOfWeek);
    return formattedDate;
}

function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

// Example Usage
// console.log(firstDayWeek(1, '2023')); // Output: "02-01-2023" (first Monday of 2023)
// console.log(firstDayWeek(2, '2023')); // Output: "09-01-2023"
// console.log(firstDayWeek(53, '2023')); // Output: "25-12-2023"
// console.log(firstDayWeek(54, '2023')); // Output: "01-01-2024" (the following year)