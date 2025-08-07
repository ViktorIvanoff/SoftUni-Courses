function addAndSubtract(array) {
    let sum = 0;
    // calc sum of first arr
    for(let num of array) {
        sum += num;
    }

    let result = [];        
    for(let i = 0; i < array.length; i++) {
        let currentNum = array[i];

        if(currentNum % 2 == 0) {
            currentNum += i;
            result.push(currentNum);
        } else if (currentNum % 2 !== 0) {
            currentNum -= i;
             result.push(currentNum);
        }
    }

    let sumOfResult = 0;
    // calc sum of first arr
    for(let num of result) {
        sumOfResult += num;
    }

    console.log(result);
    console.log(sum);
    console.log(sumOfResult);
}
addAndSubtract([5, 15, 23, 56, 35]);