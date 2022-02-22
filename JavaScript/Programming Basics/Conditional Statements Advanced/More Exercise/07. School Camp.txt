function solve(input) {

    let season = input[0];
    let group = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let pricePerNight = 0;
    let priceForStay = 0;
    let sport = 0;

    if (group === "boys") {

        switch (season) {

            case "Winter":

                sport = "Judo";
                pricePerNight = 9.60;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);
                    
                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;
                }

                break;

            case "Spring":

                sport = "Tennis";
                pricePerNight = 7.20;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);

                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;

                }

                break;

            case "Summer":

                sport = "Football";
                pricePerNight = 15;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);

                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;

                }

                break;

        }

    } else if (group === "girls") {

        switch (season) {

            case "Winter":

                sport = "Gymnastics";
                pricePerNight = 9.60;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);

                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;

                }

                break;

            case "Spring":

                sport = "Athletics";
                pricePerNight = 7.20;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);

                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;

                }

                break;

            case "Summer":

                sport = "Volleyball";
                pricePerNight = 15;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);

                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;

                }

                break;


        }

    } else if (group === "mixed") {

        switch (season) {

            case "Winter":

                sport = "Ski";
                pricePerNight = 10;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);

                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;

                }

                break;

            case "Spring":

                sport = "Cycling";
                pricePerNight = 9.50;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);

                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;

                }

                break;

            case "Summer":

                sport = "Swimming";
                pricePerNight = 20;
                priceForStay = nights * pricePerNight * students;

                if (students >= 10 && students < 20) {
                    priceForStay = priceForStay - (priceForStay * 0.05);

                } else if (students >= 20 && students < 50) {
                    priceForStay = priceForStay - (priceForStay * 0.15);

                } else if (students >= 50) {
                    priceForStay = priceForStay / 2;

                }

                break;

        }

    }

    console.log(`${sport} ${priceForStay.toFixed(2)} lv.`);
}
