function solve(tokens) {
  let username = tokens.shift();
  let password = username.split('').reverse().join('');

  let stopCounter = 1;
  let enteredPassword = tokens.shift();
  while (password !== enteredPassword) {
    if (stopCounter === 4) {
      console.log(`User ${username} blocked!`);
      return;
    }
    stopCounter++;

    console.log('Incorrect password. Try again.');
    enteredPassword = tokens.shift();
  }

  console.log(`User ${username} logged in.`);
}