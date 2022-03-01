function solve(arr = []) {

    let guests = [];
    
    for (let i = 0; i < arr.length; i++) {

      let tokens = arr[i].split(' ');
      if (guests.includes(tokens[0])) {

        tokens[2] === 'going!' ? console.log(`${tokens[0]} is already in the list!`) : guests = guests.filter(g => g !== tokens[0]);
      } else {
        tokens[2] === 'going!' ? guests.push(tokens[0]) : console.log(`${tokens[0]} is not in the list!`);
      }
    }
  
    for (let guest of guests) {
      console.log(guest);
    }
  }
  