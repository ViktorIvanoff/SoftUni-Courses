function solve(tokens = []) {

    let wagons = tokens.shift().split(' ').map(Number);
    let wagonMaxCapacity = +tokens.shift();
  
    while (tokens.length !== 0) {

      let command = tokens.shift().split(' ');
  
      if (command[0] === 'Add') {
          
        wagons.push(+command[1]);
      } else {
        let passengers = +command[0];
        const index = wagons.findIndex(x => x + passengers <= wagonMaxCapacity);
        if (index !== -1) {
          wagons[index] += passengers;
        }
      }
    }
    
    console.log(wagons.join(' '));
  }