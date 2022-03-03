function solve(tokens = []) {

    let heroes = [];
  
    while (tokens.length !== 0) {

      let heroData = tokens.shift().split(' / ');
  
      let hero = {
        name: heroData[0],
        level: heroData[1],
        items: heroData[2].split(', '),
      }
  
      heroes.push(hero);
    }
  
    for (let hero of heroes.sort((a, b) => a.level - b.level)) {

      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items.sort().join(', ')}`)
      
    }
  }