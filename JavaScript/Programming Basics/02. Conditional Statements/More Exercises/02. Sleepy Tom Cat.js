function solve(offDays) {

    offDays = Number(offDays);
    catPlayNorm = Number(30000);
    offMinutesDay = Number(127);
    workMinutesDay = Number(63);
    totalDaysYear = Number(365);
    
    let minutesPlayOff = offDays * offMinutesDay;
    let minutesPlayWork = (totalDaysYear - offDays) * workMinutesDay;
    let totalMinutesPlay = minutesPlayOff + minutesPlayWork;
    
    let timeLeft = catPlayNorm - totalMinutesPlay;
    let timeLeftS = totalMinutesPlay - catPlayNorm;
    
    if (totalMinutesPlay < catPlayNorm) {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(timeLeft / 60)} hours and ${Math.floor(timeLeft % 60)} minutes less for play`);
    } else if (totalMinutesPlay > catPlayNorm) {
        console.log("Tom will run away");
        console.log(`${Math.floor(timeLeftS / 60)} hours and ${Math.floor(timeLeftS % 60)} minutes more for play`);
    }
    
    }