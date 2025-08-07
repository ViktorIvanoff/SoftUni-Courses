
function mergeArrays(firstArr, secondArr) {
let result = [];

for(let i = 0; i <= firstArr.length - 1; i++) {
        let firstElem = firstArr[i];
        let secondElem = secondArr[i];
        
        if(i % 2 === 0) {
            let sum = Number(firstElem) + Number(secondElem);
            result.push(sum);
        } else {
            result.push(firstElem + secondElem);
        }
}
        console.log(result.join(" - "));
}
mergeArrays(
['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);