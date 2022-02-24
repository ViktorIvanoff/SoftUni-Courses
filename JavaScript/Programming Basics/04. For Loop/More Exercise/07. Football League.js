function solve(input) {

    let index = 2;
    let stadiumCapacity = Number(input[0]);
    let totalFans = Number(input[1]);

    let sectorAFans = 0;
    let sectorBFans = 0;
    let sectorVFans = 0;
    let sectorGFans = 0;

    let sectorAFansPercent = 0;
    let sectorBFansPercent = 0;
    let sectorVFansPercent = 0;
    let sectorGFansPercent = 0;
    let fansToStadiumPercent = 0;


    for (let i = 2; i <= input.length - 1; i++) {
        let currentSector = input[i];

        if (currentSector === "A") {
            sectorAFans++;

        } else if (currentSector === "B") {
            sectorBFans++;

        } else if (currentSector === "V") {
            sectorVFans++;

        } else if (currentSector === "G") {
            sectorGFans++;

        }

        index++;
    }

    sectorAFansPercent = (sectorAFans / totalFans) * 100;
    sectorBFansPercent = (sectorBFans / totalFans) * 100;
    sectorVFansPercent = (sectorVFans / totalFans) * 100;
    sectorGFansPercent = (sectorGFans / totalFans) * 100;
    fansToStadiumPercent = (totalFans / stadiumCapacity) * 100;

    console.log(`${sectorAFansPercent.toFixed(2)}%`);
    console.log(`${sectorBFansPercent.toFixed(2)}%`);
    console.log(`${sectorVFansPercent.toFixed(2)}%`);
    console.log(`${sectorGFansPercent.toFixed(2)}%`);
    console.log(`${fansToStadiumPercent.toFixed(2)}%`);

}