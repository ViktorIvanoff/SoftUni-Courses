function solve(distance, passengers, price) {

    let requiredFuel = (distance / 100.0) * 7;
    requiredFuel += passengers * 0.100;
    let money = requiredFuel * price;
    console.log(`Needed money for that trip is ${money}lv.`);
    
  }