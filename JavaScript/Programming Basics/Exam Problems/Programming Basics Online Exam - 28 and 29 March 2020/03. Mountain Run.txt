function solve(input) {

    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let delayNaklonMeters = 50;
    let delayNaklonSecs = 30;

    let timeWithoutDelay = distanceMeters * timePerMeter;
    let timeWithDelay = Math.floor((distanceMeters / delayNaklonMeters)) * delayNaklonSecs;
    let totalTime = timeWithoutDelay + timeWithDelay;

    if (totalTime < recordSeconds) {

        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);

    } else if (totalTime >= recordSeconds) {

        console.log(`No! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`);

    }

}