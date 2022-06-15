function solve(numbers) {

    const result = [];

    numbers = numbers
        .filter((x, i) => i % 2 !== 0)
        .map((x) => x * 2)
        .reverse()
        .join(" ");
    console.log(numbers);

    // 50 30
    // 6 8 0
}