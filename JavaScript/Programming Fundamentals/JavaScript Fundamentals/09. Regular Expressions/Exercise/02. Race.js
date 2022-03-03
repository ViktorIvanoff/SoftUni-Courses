function solve(input = []) {

    let racers = new Map();
    let participants = input.shift().split(', ');

    for (let racer of participants) {
      if (!racers.has(racer)) {
        racers.set(racer, 0);
      }
    }
  
    for (let i = 0; i < input.length; i++) {

      if (input[i] === 'end of race') {
        break;
      }
  
      let racer = input[i].match(/[A-Za-z]+/g).join('');
      let distance = input[i].match(/\d/g).map(x => +x).reduce((acc, value) => acc + value);
  
      if (racers.has(racer)) {
        racers.set(racer, racers.get(racer) + distance);
      }
    }
    
    racers = [...racers].sort((a, b) => b[1] - a[1]);
    racers.length = 3;
    racers = new Map(racers);
  
    let place = 1;
    let nth = 'st';
  
    for (let racer of racers) {
        
      if (place === 2) { nth = 'nd'; }
      else if (place === 3) { nth = 'rd'; }
  
      console.log(`${place++}${nth} place: ${racer[0]}`)
    }
  }