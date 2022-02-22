function solve(input) {

    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let currentTab = input[i];

        if (currentTab === "Facebook") {
            salary -= 150;

        } else if (currentTab === "Instagram") {
            salary -= 100;

        } else if (currentTab === "Reddit") {
            salary -= 50;

        }

    }

    if (salary <= 0) {
        console.log("You have lost your salary.");

    } else {
        console.log(`${salary}`);

    }

}