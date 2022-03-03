function solve(input) {

    input = input.split(' ');
  
    let junks = new Map();
  
    let materials = new Map();
    materials.set('shards', 0);
    materials.set('fragments', 0);
    materials.set('motes', 0);
  
    let isItemObtained = false;
    
    while (!isItemObtained || input.length !== 0) {

      let quantity = +input.shift();
      let material = input.shift().toLowerCase();
  
      if (materials.has(material)) {
        let currentQuantity = materials.get(material) + quantity;
        materials.set(material, currentQuantity);
  
        if (currentQuantity >= 250) {
          isItemObtained = true;
          break;
        }
      } else {
        if (!junks.has(material)) {
          junks.set(material, quantity);
        } else {
          let currentQuantity = junks.get(material) + quantity;
          junks.set(material, currentQuantity);
        }
      }
    }
  
    let obtainedItem = [...materials].find(x => x[1] >= 250);
  
    let currentQuantity = materials.get(obtainedItem[0]) - 250;
    materials.set(obtainedItem[0], currentQuantity);
  
    let item = "";
    switch (obtainedItem[0]) {
      case "shards":    item = "Shadowmourne";  break;
      case "fragments": item = "Valanyr";       break;
      case "motes":     item = "Dragonwrath";   break;
    }
  
    materials = new Map([...materials].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
    junks = new Map([...junks].sort((a, b) => a[0].localeCompare(b[0])));
  
    console.log(`${item} obtained!`)
    for (let [key, value] of materials) {
      console.log(`${key}: ${value}`)
    }
  
    for (let [key, value] of junks) {
      console.log(`${key}: ${value}`)
    }
  }
  