function solve(tokens = []) {

    let people = [];
  
    for (let i = 0; i < tokens.length; i++) {
        
      let person = {
        name: tokens[i],
        personalNumber: tokens[i].length,
      }
  
      people.push(person);
    }
    
    people.forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.personalNumber}`));
  }