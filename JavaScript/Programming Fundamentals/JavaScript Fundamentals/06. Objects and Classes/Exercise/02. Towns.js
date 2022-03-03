function solve(tokens = []) {

    let towns = [];
  
    for (let i = 0; i < tokens.length; i++) {

      let townData = tokens[i].split(' | ');

      let town = {
        town: townData[0],
        latitude: Number(townData[1]).toFixed(2),
        longitude: Number(townData[2]).toFixed(2),
      }

      towns.push(town);
      
    }
  
    towns.forEach(x => console.log(`{ town: '${x.town}', latitude: '${x.latitude}', longitude: '${x.longitude}' }`));
  }