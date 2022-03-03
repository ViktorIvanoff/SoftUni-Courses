function solve(arr = []) {

    let resources = {};
  
    while (arr.length !== 0) {

      let resource = arr.shift();
      let quantity = Number(arr.shift());
  
      if (!resources.hasOwnProperty(resource)) {
        resources[resource] = quantity;
      } else {
        resources[resource] += quantity;
      }
    }
  
    for (let [resource, quantity] of Object.entries(resources)) {

      console.log(`${resource} -> ${quantity}`);
      
    }
  }