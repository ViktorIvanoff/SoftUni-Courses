function solve(input) {

    let smallestTwo = input.
    sort((a, b) => {
            return a - b
        })
        .slice(0, 2)
        .join(' ');

    console.log(smallestTwo);

    // 5 15
    // 0 3
}