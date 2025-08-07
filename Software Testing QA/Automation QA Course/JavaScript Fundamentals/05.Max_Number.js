function maxNum(numbers) {
let result = [];

for(let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
   let isTop = true;

    for(let j = i + 1; j <= numbers.length - 1; j++) {
        let nextNum = numbers[j];
        if (currentNum <= nextNum) {
            isTop = false;
            break;
        }
    }

if(isTop) {
    result.push(currentNum);
}
}
    console.log(result.join(" "));
}
maxNum([1, 4, 3, 2]);