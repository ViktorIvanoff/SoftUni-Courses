function solve(input, sortingCriteria) {

    // create class ticket
class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

let tickets = [];
// loop through and parse input
input.forEach((el) => {
    let [destination, price, status] = el.split('|');
    price = Number(price);

  //store tickets
    tickets.push(new Ticket(destination, price, status));
});

// sort

// Ticket { destination: 'Boston', price: 126.2, status: 'departed' } => a[sortingCriteria]

returntickets.sort((a, b) => {

    if (typeof a[sortingCriteria] === 'number') {
        return a[sortingCriteria] - b[sortingCriteria];

    } else {
        return a[sortingCriteria].localeCompare(b[sortingCriteria]);
    }
});


//     [ Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' }, 
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' }, 
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' }, 
//   Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' } ]

// [ Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' } ]

}
solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);

// solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status'
// );