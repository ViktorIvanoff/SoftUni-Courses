function arrayRotation(numbers, rotations) {

for(let i = 0; i < rotations; i++) {
    let firstElem = numbers.shift();
    numbers.push(firstElem);
}
console.log(numbers.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);   // 47 32 61 21 51 

//             32 61 21 51 47