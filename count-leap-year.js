function countLeapYears(date) {
    let year = date.getFullYear();

    let leapYears = Math.floor((year - 1) / 4)
        - Math.floor((year - 1) / 100)
        + Math.floor((year - 1) / 400);

    return leapYears;
}

// let date = new Date('2024-03-15');
// console.log(countLeapYears(date)); 
