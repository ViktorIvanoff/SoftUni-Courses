function palindromeIntegers(inputArr){
    for (const number of inputArr) {
        console.log(isPalindrome(number))
    }

    function isPalindrome(num){
        let stringNum = num.toString()
        let reversedStringNum = stringNum.split('').reverse().join('')

        if (stringNum === reversedStringNum){
            return true
        } else {
            return false
        }
    }
}