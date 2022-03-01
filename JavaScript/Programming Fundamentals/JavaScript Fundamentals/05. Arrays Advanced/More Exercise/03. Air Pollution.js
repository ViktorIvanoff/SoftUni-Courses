function solve(map, affectingForces) {

    for (let row = 0; row < map.length; row++) {
      map[row] = map[row].split(' ').map(Number);
    }
  
    while (affectingForces.length !== 0) {

      let [affectingForce, param] = affectingForces.shift().split(' ');
  
      switch (affectingForce) {
        case 'breeze':
          let row = Number(param);
          for (let i = 0; i < map[row].length; i++) {
            (map[row][i] - 15 < 0) ? map[row][i] = 0 : map[row][i] -= 15;
          }
          break;
  
        case 'gale':
          let col = Number(param);
          for (let i = 0; i < map.length; i++) {
            (map[i][col] - 20 < 0) ? map[i][col] = 0 : map[i][col] -= 20;
          }
          break;
  
        case 'smog':
          let pollution = Number(param);
          for (let row = 0; row < map.length; row++) {
            for (let i = 0; i < map[row].length; i++) {
              map[row][i] += pollution;
            }
          }
          break;
  
        default:
          break;
      }
    }
  
    let pollutedAreas = [];
  
    for (let row = 0; row < map.length; row++) {

      for (let i = 0; i < map[row].length; i++) {
          
        if (map[row][i] >= 50) {
          pollutedAreas.push(`[${row}-${i}]`);
        }
      }
    }
  
    console.log(pollutedAreas.length !== 0 ? `Polluted areas: ${pollutedAreas.join(', ')}` : `No polluted areas`);
  }
  