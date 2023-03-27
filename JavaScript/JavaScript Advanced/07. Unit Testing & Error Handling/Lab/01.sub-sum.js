function solve(arr, startIndex, endIndex) {
    if(!Array.isArray(arr)) {
        return NaN;
    }

    let start = Math.max(startIndex, 0);
    let end = Math.min(endIndex, arr.length - 1);

    let subSum = arr.slice(start, end + 1);
    let sum = subSum.reduce((a, x) => a + Number(x), 0);

    return sum;

}

console.log(solve([10, 'twenty', 30, 40], 0, 2));

// 150