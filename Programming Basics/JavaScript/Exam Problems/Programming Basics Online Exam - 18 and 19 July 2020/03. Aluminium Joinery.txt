function solve(countOfDoors, typeOfDoors, deliveryMethod) {

    countOfDoors = Number(countOfDoors);
    typeOfDoors = String(typeOfDoors);
    deliveryMethod = String(deliveryMethod);

    price = 0;


    if (countOfDoors < 10) {

        console.log("Invalid order");


    } else if (countOfDoors >= 10) {


        switch (typeOfDoors) {

            case "90X130":

                price = countOfDoors * 110;

                if (countOfDoors >= 30 && countOfDoors <= 60) {

                    price -= price * 0.05;

                } else if (countOfDoors > 60) {

                    price -= price * 0.08;

                }


                if (deliveryMethod === "With delivery") {

                    price += 60;

                }

                if (countOfDoors >= 99) {

                    price -= price * 0.04;

                }

                console.log(`${price.toFixed(2)} BGN`);

                break;


            case "100X150":

                price = countOfDoors * 140;

                if (countOfDoors >= 40 && countOfDoors <= 80) {

                    price -= price * 0.06;

                } else if (countOfDoors > 80) {

                    price -= price * 0.10;

                }

                if (deliveryMethod === "With delivery") {

                    price += 60;

                }

                if (countOfDoors >= 99) {

                    price -= price * 0.04;

                }

                console.log(`${price.toFixed(2)} BGN`);

                break;


            case "130X180":

                price = countOfDoors * 190;

                if (countOfDoors >= 20 && countOfDoors <= 50) {

                    price -= price * 0.07;

                } else if (countOfDoors > 50) {

                    price -= price * 0.12;

                }

                if (deliveryMethod === "With delivery") {

                    price += 60;

                }

                if (countOfDoors >= 99) {

                    price -= price * 0.04;

                }

                console.log(`${price.toFixed(2)} BGN`);

                break;


            case "200X300":

                price = countOfDoors * 250;

                if (countOfDoors >= 25 && countOfDoors <= 50) {

                    price -= price * 0.09;

                } else if (countOfDoors > 50) {

                    price -= price * 0.14;

                }

                if (deliveryMethod === "With delivery") {

                    price += 60;

                }

                if (countOfDoors >= 99) {

                    price -= price * 0.04;

                }

                console.log(`${price.toFixed(2)} BGN`);

                break;

        }

    }


}