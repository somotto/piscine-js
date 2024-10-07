function firstDayWeek(weekNumber, year) {
    const yearInt = parseInt(year, 10);

    const firstDayOfYear = new Date(yearInt, 0, 1);
    let firstMondayOfYear = new Date(firstDayOfYear);
    
    if (firstMondayOfYear.getDay() !== 1) { 
        const daysUntilMonday = (1 + 7 - firstMondayOfYear.getDay()) % 7; 
        firstMondayOfYear.setDate(firstMondayOfYear.getDate() + daysUntilMonday);
    }

    const firstDayOfRequestedWeek = new Date(firstMondayOfYear);
    firstDayOfRequestedWeek.setDate(firstMondayOfYear.getDate() + (weekNumber - 1) * 7);

    if (firstDayOfRequestedWeek < firstDayOfYear) {
        return formatDate(firstDayOfYear);
    }

    return formatDate(firstDayOfRequestedWeek);
}

function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); 
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

// Example Usage
// console.log(firstDayWeek(1, '1000')); 
// console.log(firstDayWeek(1, '2023')); 
// console.log(firstDayWeek(2, '2023')); 
// console.log(firstDayWeek(53, '2023')); 
// console.log(firstDayWeek(54, '2023')); 