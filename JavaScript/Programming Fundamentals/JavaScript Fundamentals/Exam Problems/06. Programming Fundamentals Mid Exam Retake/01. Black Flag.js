function solve(input) {
    let daysOfPlunder = Number(input.shift());
    let plunderPerDay = Number(input.shift());
    let target = Number(input.shift());

    let totalPlunder = 0;
    let days = 0;

    for (let i = 0; i < daysOfPlunder; i++) {

        days++;
        totalPlunder += plunderPerDay;

        if (days % 3 === 0) {

            totalPlunder += plunderPerDay * 0.50;
        }

        if (days % 5 === 0) {

            let lost = totalPlunder * 0.30;
            totalPlunder -= lost;
        }

    }

    if (totalPlunder >= target) {

        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);

    } else if (totalPlunder < target) {

        let percentageLeft = (totalPlunder / target) * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);

    }
}