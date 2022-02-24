function solve(arr1 = [], arr2 = []) {

    let mergedArr = [];
    
    for (let i = 0; i < arr1.length; i++) {

      i % 2 === 0 ? mergedArr.push(+arr1[i] + +arr2[i]) : mergedArr.push(arr1[i] + arr2[i]);
    }
  
    console.log(mergedArr.join(' - '));
  }