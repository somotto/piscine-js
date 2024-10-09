function sunnySunday(date) {
    const referenceDate = new Date('0001-01-01');
    const millisecondsInADay = 24 * 60 * 60 * 1000;

    const daysSinceReference = Math.floor((date - referenceDate) / millisecondsInADay);

    const dayIndex = daysSinceReference % 6;

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return weekdays[dayIndex];
}

console.log(sunnySunday(new Date('0001-01-02'))); 
