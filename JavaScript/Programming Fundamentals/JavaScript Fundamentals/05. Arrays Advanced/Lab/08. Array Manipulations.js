function solve(tokens = []) {

    let arr = tokens.shift().split(' ').map(x => +x);
  
    for (let i = 0; i < tokens.length; i++) {

      let [command, num1, num2] = tokens[i].split(' '); // Destructuring
      num1 = +num1;
      num2 = +num2;
  
      switch (command) {

        case 'Add':       add(num1);            break;
        case 'Remove':    remove(num1);         break;
        case 'RemoveAt':  removeAt(num1);       break;
        case 'Insert':    insert(num1, num2);   break;
  
        default: break;
      }
    }
    
    console.log(arr.join(' '));
    
    function add(number) { arr.push(number); }
    function remove(number) { arr = arr.filter(x => x !== number); }
    function removeAt(index) { arr.splice(index, 1); }
    function insert(number, index) { arr.splice(index, 0, number); }
  }
  
  solve(['4 19 2 53 6 43',
         'Add 3',
         'Remove 2',
         'RemoveAt 1',
         'Insert 8 3']);
  