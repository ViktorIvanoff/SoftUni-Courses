function solve(input) {
    // '10 20 30 40 50'

    let numbers = input.split(' ').map(Number);

    let sum = numbers.reduce((x, y) => x + y);
    var averageNum = sum / numbers.length;

    let greaterThanAverageNum = numbers.filter((x) => x > averageNum);

    let sorted = greaterThanAverageNum.sort((a, b) => b - a);

    let topFive = sorted.slice(0, 5);

    topFive.length === 0 ? console.log("No") : console.log(`${topFive.join(" ")}`);


}