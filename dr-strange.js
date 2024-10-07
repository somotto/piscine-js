function addWeek(date) {
    const newWeekDays = [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
        "secondMonday", "secondTuesday", "secondWednesday",
        "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
    ];

    const epoch = new Date(1, 0, 1);

    const diffInTime = date - epoch;
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    const weekPosition = diffInDays % 14;

    return newWeekDays[weekPosition];
};

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);
    if (hour !== undefined) newDate.setHours(hour);
    if (minute !== undefined) newDate.setMinutes(minute);
    if (second !== undefined) newDate.setSeconds(second);

    return newDate;
};