function solve(arr = []) {

    let deserializedString = [];

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] !== 'end') {
          
        let indexes = arr[i].split(/:|\//);
        let letter = indexes.shift();
        indexes.forEach(x => deserializedString[x] = letter);
      }
    }
  
    console.log(deserializedString.join(''))
  }
  