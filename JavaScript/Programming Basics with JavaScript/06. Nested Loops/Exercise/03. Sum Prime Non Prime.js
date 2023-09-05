function solve(input) {

    let primeSum = 0;
    let nonPrimeSum = 0;
    let index = 0;

    let currentNum = input[index++];

    while (currentNum !== "stop") {

        currentNum = Number(currentNum);
        let isPrime = true;

        if (currentNum < 0) {

            console.log('Number is negative.');
            currentNum = input[index++];
            continue;
        }

        for (let i = 2; i < currentNum; i++) {

            if (currentNum % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += currentNum;
        } else {
            nonPrimeSum += currentNum;
        }
    
         currentNum = input[index++];
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}