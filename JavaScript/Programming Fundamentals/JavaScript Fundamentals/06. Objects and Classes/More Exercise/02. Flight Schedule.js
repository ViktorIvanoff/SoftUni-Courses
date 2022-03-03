function getFlights(arr = []) {
    let flights = {};
  
    let flightTokens = arr[0];

    while (flightTokens.length !== 0) {

      let [sector, destination] = flightTokens.shift().split(' ');

      if (!flights.hasOwnProperty(sector)) {

        flights[sector] = {};
        flights[sector].destination = destination;
        flights[sector].status = 'Ready to fly';

      }
    }
  
    let statuses = arr[1];
    
    while (statuses.length !== 0) {
        
      let [sector, status] = statuses.shift().split(' ');
      if (flights.hasOwnProperty(sector)) {
        flights[sector].status = status;
      }
    }
  
    let checkStatus = arr[2][0];

    for (let [key, value] of Object.entries(flights).filter(x => x[1].status === checkStatus)) {
      console.log(`{ Destination: '${value.destination}', Status: '${value.status}' }`);
    }
  }