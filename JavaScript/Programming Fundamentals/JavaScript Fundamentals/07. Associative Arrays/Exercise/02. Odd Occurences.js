function solve(words) {

    let map = new Map();
    words = words.split(' ').map(x => x.toLowerCase());
    
    for (let word of words) {

      if (!map.has(word)) {

        map.set(word, 1);
      } else {
          
        let count = map.get(word);
        map.set(word, count + 1);      
      }
    }
    
    map = new Map([...map].filter(x => x[1] % 2 !== 0));
    console.log([...map.keys()].join(' '));
  }