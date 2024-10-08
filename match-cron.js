function matchCron(cron, date) {
    const [cronMinute, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cron.split(' ');

    const minute = date.getUTCMinutes();
    const hour = date.getUTCHours();
    const dayOfMonth = date.getUTCDate();
    const month = date.getUTCMonth() + 1; 
    const dayOfWeek = (date.getUTCDay() + 1) % 7 || 7; 
    const matches = (cronPart, value) => {
        if (cronPart === '*') {
            return true; 
        }
        return cronPart == value; 
    };

    return (
        matches(cronMinute, minute) &&
        matches(cronHour, hour) &&
        matches(cronDayOfMonth, dayOfMonth) &&
        matches(cronMonth, month) &&
        matches(cronDayOfWeek, dayOfWeek)
    );
}

// Example usage
// console.log(matchCron('9 * * * *', new Date('2020-05-30T18:09:00Z'))); 
// console.log(matchCron('9 * * * *', new Date('2020-05-30T19:09:00Z'))); 
// console.log(matchCron('9 * * * *', new Date('2020-05-30T19:21:00Z')));