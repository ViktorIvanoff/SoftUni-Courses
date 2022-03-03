function solve(arr = []) {

    let numberPlates = new Set();

    while (arr.length !== 0) {

      let [command, numberPlate] = arr.shift().split(', ');

      switch (command) {
          
        case 'IN':
          numberPlates.add(numberPlate);
          break;
  
        case 'OUT':
          numberPlates.delete(numberPlate);
          break;
  
        default:
          break;
      }
    }
  
    numberPlates.size !== 0 ? [...numberPlates].sort().forEach(x => console.log(x)) : console.log('Parking Lot is Empty');
  }
  