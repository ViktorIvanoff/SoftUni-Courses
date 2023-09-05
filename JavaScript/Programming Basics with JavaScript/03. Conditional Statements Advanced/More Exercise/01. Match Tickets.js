function solve(input) {

    let budget = Number(input[0]);
    let ticketType = input[1];
    let people = Number(input[2]);

    let vipTicketPrice = 499.99;
    let normalTicketPrice = 249.99;
    let transportMoney = 0;
    let remainingMoney = 0;
    let ticketPrice = 0;


    if (people >= 1 && people <= 4) {

        transportMoney = budget * 0.75;
        remainingMoney = budget - transportMoney;

        if (ticketType === "Normal") {
            ticketPrice = people * normalTicketPrice;

        } else if (ticketType === "VIP") {
            ticketPrice = people * vipTicketPrice;

        }


    } else if (people >= 5 && people <= 9) {

        transportMoney = budget * 0.60;
        remainingMoney = budget - transportMoney;

        if (ticketType === "Normal") {
            ticketPrice = people * normalTicketPrice;

        } else if (ticketType === "VIP") {
            ticketPrice = people * vipTicketPrice;

        }
    }
    else if (people >= 10 && people <= 24) {

        transportMoney = budget / 2;
        remainingMoney = budget - transportMoney;

        if (ticketType === "Normal") {
            ticketPrice = people * normalTicketPrice;

        } else if (ticketType === "VIP") {
            ticketPrice = people * vipTicketPrice;
        }

    } else if (people >= 25 && people <= 49) {

        transportMoney = budget * 0.40;
        remainingMoney = budget - transportMoney;

        if (ticketType === "Normal") {
            ticketPrice = people * normalTicketPrice;

        } else if (ticketType === "VIP") {
            ticketPrice = people * vipTicketPrice;

        }

    } else if (people >= 50) {

        transportMoney = budget * 0.25;
        remainingMoney = budget - transportMoney;

        if (ticketType === "Normal") {
            ticketPrice = people * normalTicketPrice;

        } else if (ticketType === "VIP") {
            ticketPrice = people * vipTicketPrice;

        }
    }

    if (remainingMoney > ticketPrice) {

        console.log(`Yes! You have ${(remainingMoney - ticketPrice).toFixed(2)} leva left.`);

    } else if (remainingMoney < ticketPrice) {

        console.log(`Not enough money! You need ${(ticketPrice - remainingMoney).toFixed(2)} leva.`);
    }
}
