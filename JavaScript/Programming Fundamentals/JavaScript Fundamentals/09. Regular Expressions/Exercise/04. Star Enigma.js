function solve(input = []) {

    let attackedPlanets = new Set();
    let destroyedPlanets = new Set();
  
    let n = +input.shift();

    for (let i = 0; i < n; i++) {

      let message = input[i];
      let decrypted = '';
  
      let matches = message.match(/[STARstar]/g);

      for (let k = 0; k < message.length; k++) {

        decrypted += String.fromCharCode(message.charCodeAt(k) - (matches !== null ? matches.length : 0));
      }
  
      let planetMatch = decrypted.matchAll(/@[^@\-!:>]*?(?<planet>[A-Z][a-z]+)[^@\-!:>]*?:[^@\-!:>]*?(?<population>\d+)[^@\-!:>]*?![^@\-!:>]*?(?<attackType>[AD])[^@\-!:>]*?![^@\-!:>]*?->[^@\-!:>]*?(?<soldiers>\d+)[^@\-!:>]*?/g);

      for (let match of planetMatch) {
          
        let planet = match.groups['planet'];
        let attackType = match.groups['attackType'];
  
        if (attackType === 'A') {
          attackedPlanets.add(planet);
        } else if (attackType === 'D') {
          destroyedPlanets.add(planet);
        }
      }
    }
  
    attackedPlanets = new Set([...attackedPlanets].sort((a, b) => a.localeCompare(b)));
    destroyedPlanets = new Set([...destroyedPlanets].sort((a, b) => a.localeCompare(b)));
  
    console.log(`Attacked planets: ${attackedPlanets.size}`);
    attackedPlanets.forEach(x => console.log(`-> ${x}`));
  
    console.log(`Destroyed planets: ${destroyedPlanets.size}`);
    destroyedPlanets.forEach(x => console.log(`-> ${x}`));
  }
  