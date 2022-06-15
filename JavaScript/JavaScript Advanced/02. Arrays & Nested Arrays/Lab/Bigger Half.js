function solve(input) {

    let sorted = input.sort((a, b) => {
        return a - b;
    });

    sorted = sorted.slice(Math.floor(sorted.length / 2), sorted.length);
    return sorted;

    // [5, 7]
    // [7, 14, 19, 19]
}