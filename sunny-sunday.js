function sunnySunday(date) {
    const referenceDate = new Date(1, 0, 1); 
    const millisecondsInADay = 24 * 60 * 60 * 1000;

    const daysSinceReference = Math.floor((date - referenceDate) / millisecondsInADay);

    const dayIndex = daysSinceReference % 6;

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return weekdays[dayIndex];
}

// console.log(sunnySunday(new Date('2024-10-08'))); 
