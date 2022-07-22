function solve(requirements) {
    // { model: 'VW Golf II',       // input
    // power: 90,
    // color: 'blue',
    // carriage: 'hatchback',
    // wheelsize: 14 }
  
    //{ model: 'VW Golf II',      // output
    // engine: { power: 90,
    //           volume: 1800 },
    // carriage: { type: 'hatchback',
    //             color: 'blue' },
    // wheels: [13, 13, 13, 13] }
    const carForClient = {
      model: requirements.model
    }
  
    // You need to determine which parts to use to fulfill the client’s order. You have the following parts in storage:
  
    // An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.
  
    // Small engine: { power: 90, volume: 1800 }
    // Normal engine: { power: 120, volume: 2400 }
    // Monster engine: { power: 200, volume: 3500 }
  
    // A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint them any color.
  
    // Hatchback: { type: 'hatchback', color: <as required> }
    // Coupe: { type: 'coupe', color: <as required> }
    const storage = {
  
      smallEngine: { power: 90, volume: 1800 },
      normalEngine: { power: 120, volume: 2400 },
      monsterEngine: { power: 200, volume: 3500 },
      hatchback: { type: 'hatchback', color: '<as required>' },
      coupe:  { type: 'coupe', color: '<as required>' }
  
    }
  
    if (requirements.power <= 90) {
      carForClient.engine = storage.smallEngine;
  
    } else if (requirements.power <= 120) {
      carForClient.engine = storage.normalEngine;
  
    } else if (requirements.power <= 200) {
      carForClient.engine = storage.monsterEngine;
    }
    
  
    if (requirements.carriage === 'hatchback') {
  
      carForClient.carriage = storage.hatchback;
      carForClient.carriage.color = requirements.color;
  
    } else if (requirements.carriage === 'coupe') {
  
      carForClient.carriage = storage.coupe;
      carForClient.carriage.color = requirements.color;
    }
  
  // The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 
  
  if (requirements.wheelsize % 2 === 0) {
    // if the required wheelsize is an even number, we need to make it an odd number by rounding it down by subtracting 1 
    let currentWheelSize = requirements.wheelsize - 1;
    carForClient.wheels = [];
    carForClient.wheels.push(currentWheelSize, currentWheelSize, currentWheelSize, currentWheelSize);
  
  } else {
    // if the required wheelsize is an odd number, we keep it as it is and just push it into 4 numbers Array
    let currentWheelSize = requirements.wheelsize;
    carForClient.wheels = [];
    carForClient.wheels.push(currentWheelSize, currentWheelSize, currentWheelSize, currentWheelSize);
  }
    
  return carForClient;
  
  }