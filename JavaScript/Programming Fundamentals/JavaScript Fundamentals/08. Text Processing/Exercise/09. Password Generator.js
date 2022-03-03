function solve(arr = []) {

    let password = arr[0] + arr[1];
    let replacements = arr[2].toUpperCase().split('');
  
    for (let i = 0; i < password.length; i++) {

      if (/[aeiou]/.test(password[i])) {

        let test = replacements.shift();
        replacements.push(test);
  
        password = password.replace(password[i], test);
        
      }
    }
  
    password = password.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
  }
  