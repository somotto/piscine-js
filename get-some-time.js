const firstDayWeek = (weekNumber, yearString) => {
    const year = parseInt(yearString, 10);
    
    const januaryFirst = new Date(year, 0, 1); 
    const dayOfWeek = januaryFirst.getDay(); 
    const daysToFirstMonday = (dayOfWeek === 0) ? 1 : (8 - dayOfWeek); 
    const firstMonday = new Date(januaryFirst);
    firstMonday.setDate(januaryFirst.getDate() + daysToFirstMonday);
    
    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (weekNumber - 1) * 7);
    
    if (firstDayOfWeek < januaryFirst) {
        return `01-01-${year}`;
    }
    
    const dd = String(firstDayOfWeek.getDate()).padStart(2, '0');
    const mm = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0');
    const yyyy = firstDayOfWeek.getFullYear();
    
    return `${dd}-${mm}-${yyyy}`;
};

// console.log(firstDayWeek(1, "2023"));  
// console.log(firstDayWeek(53, "2023")); 
