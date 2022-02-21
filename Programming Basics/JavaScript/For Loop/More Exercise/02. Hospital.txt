function solve(input) {

    let days = Number(input[0]);
    let index = 1;

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let countOfDoctors = 7;


    for (let day = 1; day <= days; day++) {

        let currentPatients = Number(input[index]);

        if ((day % 3 === 0) && (untreatedPatients > treatedPatients)) {

            countOfDoctors++;
        }

        if (currentPatients > countOfDoctors) {
            treatedPatients += countOfDoctors;
            untreatedPatients += (currentPatients - countOfDoctors);

        } else {

            treatedPatients += currentPatients;
        }
        index++;
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
