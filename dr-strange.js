function addWeek(date) {
    const epochDate = new Date('0001-01-01');

    const diffTime = Math.abs(date - epochDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const dayOfWeek = diffDays % 14;

    const days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];

   
    return days[dayOfWeek];
}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);

    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);

    return newDate;
}

console.log(addWeek(new Date('0001-01-01')));
console.log(addWeek(new Date('0001-01-08')));

const traveledDate = timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
});

console.log(traveledDate.toString());
