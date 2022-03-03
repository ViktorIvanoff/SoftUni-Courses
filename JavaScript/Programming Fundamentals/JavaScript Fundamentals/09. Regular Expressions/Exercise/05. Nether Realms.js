function solve(tokens = []) {

    let demons = [];
  
    tokens = tokens[0].split(/[, ]+/g);

    for (let i = 0; i < tokens.length; i++) {

      let totalHealth = 0;
      matches = tokens[i].match(/[^\d+\-*\/.]/g);
      if (matches !== null) {
        matches.forEach(x => totalHealth += x.charCodeAt(0));
      }
  
      matches = tokens[i].match(/[-+]?[\d\.]*\d/g);
      let baseDmg = 0;

      if (matches !== null) {
        matches.forEach(x => baseDmg += Number(x));
      }
  
      matches = tokens[i].match(/[*\/]/g);

      if (matches !== null) {

        for (let match of matches) {

          if (match === '*') {
            baseDmg *= 2;
          } else if (match === '/') {
            baseDmg /= 2;
          }
        }
      }
  
      let demon = {
        name: tokens[i],
        health: totalHealth,
        damage: baseDmg,
      };
  
      demons.push(demon);
    }
  
    demons.sort((a, b) => a.name.localeCompare(b.name));
    demons.forEach(x => console.log(`${x.name} - ${x.health} health, ${x.damage.toFixed(2)} damage`));
  }