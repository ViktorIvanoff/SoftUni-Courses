function ticketPrice(dayOfWeek) {

    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Friday") {
        console.log(12);
    } else if (dayOfWeek === "Wednesday" || dayOfWeek === "Thursday") {
        console.log(14);
    } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        console.log(16);
    }
}