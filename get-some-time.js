function firstDayWeek(week, year) {
    if (week < 1 || week > 53 || !/^\d{4}$/.test(year)) {
      throw new Error('Invalid input');
    }
  
    const firstDay = new Date(year, 0, 1);
    
    const dayOffset = (8 - firstDay.getDay()) % 7;
    const firstWeekStart = new Date(year, 0, 1 + dayOffset);
    
    const requestedDate = new Date(firstWeekStart.getTime() + (week - 1) * 7 * 24 * 60 * 60 * 1000);
    
    if (requestedDate.getFullYear() < parseInt(year)) {
      return formatDate(new Date(year, 0, 1));
    }
    
    return formatDate(requestedDate);
  }
  
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }