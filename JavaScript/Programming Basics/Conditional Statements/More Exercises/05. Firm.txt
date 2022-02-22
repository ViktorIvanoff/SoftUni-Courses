function solve(input) {

    let hoursNeeded = Number(input[0]);
    let firmDays = Number(input[1]);
    let extraWorkers = Number(input[2]);

    let trainingTime = firmDays * 0.10;
    let workingDay = 8;
    let extraWorkHoursPerWorker = 2;

    let workDays = firmDays - trainingTime;
    let workHours = workDays * workingDay;

    let extraWorkingHours = extraWorkers * (firmDays * extraWorkHoursPerWorker);

    let totalHours = Math.floor(workHours + extraWorkingHours);

    if (totalHours > hoursNeeded) {
        console.log(`Yes!${totalHours - hoursNeeded} hours left.`);
    } else if (totalHours < hoursNeeded) {
        console.log(`Not enough time!${hoursNeeded - totalHours} hours needed.`);
    }

}