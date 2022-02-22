function solve(input) {

    let minutesPerDay = Number(input[0]);
    let dailyWalks = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let caloriesPerMinute = 5;
    let enoughWalk = caloriesPerDay / 2;

    let totalMinutesWalk = minutesPerDay * dailyWalks;
    let totalBurnedCaloriesPerDay = totalMinutesWalk * caloriesPerMinute;

    if (totalBurnedCaloriesPerDay >= enoughWalk) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCaloriesPerDay}.`);

    } else if (totalBurnedCaloriesPerDay < enoughWalk) {

        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCaloriesPerDay}.`);
    }

}