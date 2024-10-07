function firstDayWeek(week, year) {
    year = parseInt(year);
    
    let jan1 = new Date(year, 0, 1);
    
    let jan1Day = jan1.getDay();
    
    jan1Day = jan1Day === 0 ? 6 : jan1Day - 1;

    let firstWeekStart = new Date(year, 0, 1 - jan1Day + (jan1Day > 3 ? 7 : 0));
   
    let targetDate = new Date(firstWeekStart);
    targetDate.setDate(firstWeekStart.getDate() + (week - 1) * 7);
    
    if (targetDate.getFullYear() < year) {
        targetDate = new Date(year, 0, 1);
    }

    let dd = String(targetDate.getDate()).padStart(2, '0');
    let mm = String(targetDate.getMonth() + 1).padStart(2, '0'); 
    let yyyy = targetDate.getFullYear();
    
    return `${dd}-${mm}-${yyyy}`;
}

// Example usage:
// console.log(firstDayWeek(1, "1000")); // Should return "01-01-1000"
// console.log(firstDayWeek(1, "2023")); // Should return "02-01-2023"
// console.log(firstDayWeek(52, "2023")); // Should return "25-12-2023"
// console.log(firstDayWeek(1, "2024")); // Should return "01-01-2024"