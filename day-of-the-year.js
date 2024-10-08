function dayOfTheYear(date) {
    if (!(date instanceof Date)) {
        throw new Error("Invalid input: must be a Date object");
    }

    const year = date.getFullYear();

    const startOfYear = new Date(year, 0, 1); 

    const diffInMillis = date - startOfYear;

    const daysSinceStartOfYear = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));

    return daysSinceStartOfYear + 1;
}

const date = new Date("2024-10-08");
console.log(dayOfTheYear(date)); 