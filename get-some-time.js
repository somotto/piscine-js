function firstDayWeek(week, yearStr) {
    const year = parseInt(yearStr, 10);
    if (week < 1 || week > 53) {
        return "Invalid week number";
    }
    const firstOfYear = new Date(year, 0, 1);
    let firstMonday = new Date(firstOfYear);
    
    if (firstOfYear.getDay() !== 1) { 
        const daysUntilMonday = (8 - firstOfYear.getDay()) % 7;
        firstMonday.setDate(firstOfYear.getDate() + daysUntilMonday);
    }

    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);
    
    if (firstDayOfWeek < firstOfYear && week > 1) {
        return firstOfYear.toLocaleDateString("en-GB"); 
    }
    
    const day = String(firstDayOfWeek.getDate()).padStart(2, '0');
    const month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0'); 
    const formattedDate = `${day}-${month}-${year}`;
    
    return formattedDate;
}

// console.log(firstDayWeek(1, "2023")); 
// console.log(firstDayWeek(53, "2023")); 
// console.log(firstDayWeek(1, "2022")); 
// console.log(firstDayWeek(52, "2022")); 