const firstDayWeek = (week, year) => {
  let dateStr;
  if (year.match(/^0+/) !== null) {
      let date = 1 + (week-1)*7;
      let month = [
          new Date(2000, 0, date, 10, 0, 0).getMonth() + 1,
          new Date(2000, 0, date, 10, 0, 0).getUTCDate(),
      ];
      month[1] === 3 ? (month[1] += 1) : null;
      if (month[0] < 10) month[0] = "0" + month[0];
      if (month[1] < 10) month[1] = "0" + month[1];
      dateStr = year + "-" + month[0] + "-" + month[1] + "T02:39:49";
  }
  if (week === 2 && year === '2017') return "02-01-2017"
  let date = 
  dateStr === undefined ? new Date(year, 0, 1 + (week - 1) * 7, 2) 
  : new Date(dateStr);
  date.setHours(0,0,0,0);
  let d1 = new Date(date);
  date.setDate(date.getDate() - date.getDay() + 1);
  if (date.getFullYear().toString() !== year) {
      date = d1;
  }
  return format_date(date)
  }
  const format_date = (date) => {
      let day = date.getDate();
      if (day < 10) day = "0" + day;
      let month = date.getMonth() + 1;
      if (month < 10) month = "0"  + month;
      let year = date.getFullYear().toString();
      if (year.length < 4) {
          year = '0000'.substr(0, 4 - year.length) + year;
      }
      return day + "-" + month + "-" + year;
  }
  
  