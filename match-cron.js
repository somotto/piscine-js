function matchCron(cron, date) {
    const cronParts = cron.split(' ');
    if (cronParts.length !== 5) {
      throw new Error('Invalid cron format');
    }
  
    const [cronMinute, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cronParts;
  
    const dateMinute = date.getMinutes();
    const dateHour = date.getHours();
    const dateDayOfMonth = date.getDate();
    const dateMonth = date.getMonth() + 1; 
    let dateDayOfWeek = date.getDay();
    if (dateDayOfWeek === 0) dateDayOfWeek = 7;
  
    function matchField(cronField, dateValue) {
      if (cronField === '*') {
        return true; 
      }
      return parseInt(cronField) === dateValue;
    }

    return (
      matchField(cronMinute, dateMinute) &&
      matchField(cronHour, dateHour) &&
      matchField(cronDayOfMonth, dateDayOfMonth) &&
      matchField(cronMonth, dateMonth) &&
      matchField(cronDayOfWeek, dateDayOfWeek)
    );
  }
  
//   // Test examples
//   console.log(matchCron('9 * * * *', new Date('2020-05-30T18:09:00'))); // -> true
//   console.log(matchCron('9 * * * *', new Date('2020-05-30T19:09:00'))); // -> true
//   console.log(matchCron('9 * * * *', new Date('2020-05-30T19:21:00'))); // -> false
  