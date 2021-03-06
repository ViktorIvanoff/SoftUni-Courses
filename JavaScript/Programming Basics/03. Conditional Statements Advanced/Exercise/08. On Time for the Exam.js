function solve(examHour, examMinute, arrivalHour, arrivalMinute) {

    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arrivalHour = Number(arrivalHour);
    arrivalMinute = Number(arrivalMinute);

    let totalExamMinutes = examHour * 60 + examMinute;
    let totalArrivalMinutes = arrivalHour * 60 + arrivalMinute;
    let diff = totalExamMinutes - totalArrivalMinutes;

    if (diff > 30) {
        console.log("Early");

        if (diff >= 60) {
            let hours = Math.trunc(diff / 60);
            let minutes = diff % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hours}:${minutes} hours before the start`);
        } else {
            console.log(`${diff} minutes before the start`);
        }
    } else if (diff >= 0) {
        console.log("On time");

        if (diff !== 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else {

        console.log("Late");
        diff = Math.abs(diff);

        if (diff >= 60) {
            let hours = Math.trunc(diff / 60);
            let minutes = diff % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }

            console.log(`${hours}:${minutes} hours after the start`);

        } else {
            console.log(`${diff} minutes after the start`);
        }
    }


}