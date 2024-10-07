const firstDayWeek = (week, year) => {

    const firstJan = new Date(`${year}-01-01`);

    let dayOfWeek = firstJan.getDay();

    const dayOffset = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;

    const firstMonday = new Date(firstJan);
    firstMonday.setDate(firstJan.getDate() - dayOffset);

    const firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

    if (firstDayOfWeek.getFullYear() < year) {
        return `01-01-${year.padStart(4,'0')}`;
    }

    const day = String(firstDayOfWeek.getDate()).padStart(2, '0');
    const month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0');
    const resultYear = firstDayOfWeek.getFullYear(4, '0');

    return `${day}-${month}-${resultYear}`;
};

// // Example usage:
// console.log(firstDayWeek(1, "2024"));
// console.log(firstDayWeek(10, "2023"));
