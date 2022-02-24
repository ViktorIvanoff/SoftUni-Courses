function solve(tokens = []) {

    let games = tokens[0].split(' ');
  
    for (let i = 1; i < tokens.length; i++) {

      let command = tokens[i].split(' ');

      switch (command[0]) {
          
        case 'Install':
          if (!games.includes(command[1])) {
            games.push(command[1])
          }
          break;
          
        case 'Uninstall':
          games = games.filter(game => game !== command[1]);
          break;
  
        case 'Update':
          let index = games.indexOf(command[1]);
          if (index !== -1) {
            games.splice(index, 1);
            games.push(command[1]);
          }
          break;
  
        case 'Expansion':
          let expansion = command[1].split('-');
          let expansionGameIndex = games.indexOf(expansion[0]);
          if (expansionGameIndex !== -1) {
            games.splice(expansionGameIndex + 1, 0, command[1].replace('-', ':'));
          }
          break;
  
        case 'Play!':
          console.log(games.join(' '));
          return;
  
        default:
          break;
      }
    }
  }