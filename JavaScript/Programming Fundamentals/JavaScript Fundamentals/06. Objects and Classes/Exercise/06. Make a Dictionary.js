function solve(tokens = []){

    let dict = {};

    for (let token of tokens){

        let obj = JSON.parse(token);
        dict = Object.assign(dict, obj);       
    }
       
    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a, b) => a.localeCompare(b));   
     
    for (let term of sortedKeys) {

        let definition = dict[term];             
        console.log(`Term: ${term} => Definition: ${definition}`);
        
    }
  }