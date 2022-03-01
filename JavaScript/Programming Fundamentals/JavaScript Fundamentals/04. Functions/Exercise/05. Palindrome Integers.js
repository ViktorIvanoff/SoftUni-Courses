function checkPalindromes(numbers = []) {

    function isPalindrome(number) {

      let numAsText = number.toString().split('').reverse().join('');
      let num = numAsText - '0';
      console.log(number === num ? "true" : "false");

    }
  
    for (let number of numbers) {

      isPalindrome(number);
      
    }
  }