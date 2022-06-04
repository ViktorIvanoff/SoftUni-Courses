function solve(month, year) {
    month = Number(month);
    year = Number(year);

    let totalDays = 0;

    totalDays = new Date(year, month, 0).getDate();
    console.log(totalDays);
}

solve(1, 2012);

solve(2, 2021);