function firstDayWeek(weekNumber, year) {
    const yearInt = parseInt(year, 10);
    
    const startOfYear = new Date(yearInt, 0, 1).getTime();
    
    let dayOfTheWeek = new Date(startOfYear).getDay(); 

    const daysToAdd = (dayOfTheWeek === 1) ? 0 : (8 - dayOfTheWeek) % 7;

    const firstMondayOfYear = startOfYear + (daysToAdd * 24 * 60 * 60 * 1000); 

    const firstDayOfRequestedWeek = firstMondayOfYear + ((weekNumber - 1) * 7 * 24 * 60 * 60 * 1000); 

    const resultDate = new Date(firstDayOfRequestedWeek);
    
    if (resultDate < new Date(yearInt, 0, 1)) {
        return formatDate(new Date(yearInt, 0, 1)); 
    }

    return formatDate(resultDate);
}

function formatDate(date) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

// Example Usage
console.log(firstDayWeek(1, '1000')); // Output should be "01-01-1000"
console.log(firstDayWeek(1, '2023')); // Output: "02-01-2023"
console.log(firstDayWeek(2, '2023')); // Output: "09-01-2023"
console.log(firstDayWeek(53, '2023')); // Output: "25-12-2023"
console.log(firstDayWeek(54, '2023')); // Output: "01-01-2024"