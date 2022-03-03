function solve(arr = []) {
    
    let players = new Map();
  
    while (arr.length !== 0) {

      let tokens = arr.shift().split(': ');
      let player = tokens[0];
      let cards = tokens[1].split(', ');
  
      if (!players.has(player)) {

        players.set(player, new Set());
      }
  
      for (let card of cards) {

        players.get(player).add(card);
      }
    }
  
    for (let player of players) {

      console.log(`${player[0]}: ${calculatePoints(player[1])}`);
    }
  
    function calculatePoints(deck) {

      deck = [...deck];
      const types = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
      const powers = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
  
      let points = 0;

      for (let card of deck) {

        let type = card.substring(0, card.length - 1);
        let power = card.substring(card.length - 1, card.length);
        points += types[type] * powers[power]; 
      }
      return points;
    }
  }