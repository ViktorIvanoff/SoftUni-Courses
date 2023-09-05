function solution(number) {
    // Write a program that keeps a number inside its context and returns a new function that adds a given number to the previous one.

   function add(a, b) {
    return a + b;
   }

    return (n) => add(number, n);

}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
