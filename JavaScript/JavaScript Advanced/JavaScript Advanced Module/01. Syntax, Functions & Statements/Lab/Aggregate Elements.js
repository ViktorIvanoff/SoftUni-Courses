function solve(input) {
    // Sum(ai) - calculates the sum of all elements from the input array•
    // Sum(1 / ai) - calculates the sum of the inverse values(1 / ai) of all elements from the array•
    // Concat(ai) - concatenates the string representations of all elements from the array
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b) => a + b); // total Sum of the elements 
    aggregate(elements, 0, (a, b) => a + 1 / b); // sum of the inverse values 
    aggregate(elements, "", (a, b) => a + b); // concatenation

    function aggregate(arr, initVal, func) {

        let val = initVal;

        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }

        console.log(val);
    }
    // 6
    // 1.8333333333333333
    // 123

    // 30
    // 0.9375
    // 24816
}

solve([1, 2, 3]);

solve([2, 4, 8, 16]);