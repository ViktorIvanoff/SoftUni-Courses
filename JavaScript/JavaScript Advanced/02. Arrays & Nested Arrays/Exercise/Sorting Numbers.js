function solve(arr) {
    // first we sort the array in descending order
   
    arr.sort((a, b) => b - a);
   
   let result = [];
   
   while (arr.length !== 0) {
    // than we create a new array in which we push first the last element of the input, followed by the first element in the input
       result.push(arr.pop());
       result.push(arr.shift());
   
   }
   
   return result;
   
       // [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
   }
   