function solve(input) {
    // ['5','6','4','20']
    let firstEmployeeStudents = Number(input[0]);
    let secondEmployeeStudents = Number(input[1]);
    let thirdEmployeeStudents = Number(input[2]);
    let totalStudents = Number(input[3]);
    let totalStudentsPerHour = firstEmployeeStudents + secondEmployeeStudents + thirdEmployeeStudents;
    let hours = 0;
    let answeredStudents = 0;

    while (answeredStudents < totalStudents) {

        if (hours % 4 === 0 && hours !== 0) {
            hours++;
            continue;
        }
        answeredStudents += totalStudentsPerHour;
        hours++;
    }

    if (hours % 4 === 0 && hours !== 0) {
        hours++;
    }

    console.log(`Time needed: ${hours}h.`);
}