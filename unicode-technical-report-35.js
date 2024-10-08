function format(date, formatString) {
    const pad = (num, size) => String(num).padStart(size, '0');

    const year = date.getFullYear();
    const month = date.getMonth(); 
    const day = date.getDate();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const shortWeekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const era = year >= 0 ? 'AD' : 'BC'; 
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const shortMonthNames = monthNames.map(m => m.slice(0, 3));

    return formatString
        .replace(/yyyy/g, year)
        .replace(/yy/g, pad(year % 100, 2))
        .replace(/GGGG/g, era === 'AD' ? 'Anno Domini' : 'Before Christ')
        .replace(/G/g, era)
        .replace(/MMMM/g, monthNames[month])
        .replace(/MMM/g, shortMonthNames[month])
        .replace(/MM/g, pad(month + 1, 2))
        .replace(/M/g, month + 1)
        .replace(/dd/g, pad(day, 2))
        .replace(/d/g, day)
        .replace(/EEEE/g, weekday)
        .replace(/E/g, shortWeekday)
        .replace(/HH/g, pad(hours24, 2))
        .replace(/H/g, hours24)
        .replace(/hh/g, pad(hours12, 2))
        .replace(/h/g, hours12)
        .replace(/mm/g, pad(minutes, 2))
        .replace(/m/g, minutes)
        .replace(/ss/g, pad(seconds, 2))
        .replace(/s/g, seconds)
        .replace(/a/g, hours24 >= 12 ? 'PM' : 'AM');
}

// const d = new Date('7 January 1985, 3:08:19');
// console.log(format(d, 'HH(mm)ss [dd] <MMM>')); 