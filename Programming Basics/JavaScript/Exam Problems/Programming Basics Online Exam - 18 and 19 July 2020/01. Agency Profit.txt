function solve(airline, oldTickets, kidTickets, oldTicketNetPrice, serviceTax) {

    airline = String(airline);
    oldTickets = Number(oldTickets);
    kidTickets = Number(kidTickets);
    oldTicketNetPrice = Number(oldTicketNetPrice);
    serviceTax = Number(serviceTax);

    let totalProfit = 0;

    let kidTicketPrice = oldTicketNetPrice - (oldTicketNetPrice * 0.70);
    let oldTicketPricePlusTax = oldTicketNetPrice + serviceTax;
    let kidTicketPricePlusTax = kidTicketPrice + serviceTax;
    let totalTickets = (kidTickets * kidTicketPricePlusTax) + (oldTickets * oldTicketPricePlusTax);

    totalProfit = totalTickets * 0.20;

    console.log(`The profit of your agency from ${airline} tickets is ${totalProfit.toFixed(2)} lv.`);

}