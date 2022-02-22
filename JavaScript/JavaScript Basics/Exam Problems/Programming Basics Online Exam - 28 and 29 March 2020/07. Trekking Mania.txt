function solve(input) {

    let index = 1;
    let groupsCount = Number(input[0]);
    let totalPeople = 0;

    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimandjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;

    for (let i = 1; i <= input.length - 1; i++) {

        totalPeople += Number(input[i]);

        let currentGroup = Number(input[i]);


        if (currentGroup <= 5) {

            musalaGroup += currentGroup;

        } else if (currentGroup >= 6 && currentGroup <= 12) {

            monblanGroup += currentGroup;

        } else if (currentGroup >= 13 && currentGroup <= 25) {

            kilimandjaroGroup += currentGroup;

        } else if (currentGroup >= 26 && currentGroup <= 40) {

            k2Group += currentGroup;

        } else if (currentGroup >= 41) {

            everestGroup += currentGroup;

        }

    }

    console.log(`${(musalaGroup / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblanGroup / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaroGroup / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2Group / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everestGroup / totalPeople * 100).toFixed(2)}%`);

}