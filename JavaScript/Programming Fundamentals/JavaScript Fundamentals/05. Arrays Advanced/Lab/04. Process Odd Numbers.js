function solve(arr = []) {

    let extractedNums = arr.filter((num, i) => i % 2 == 1)
                           .map(x => x * 2)
                           .reverse();
  
    console.log(extractedNums.join(' '));
  
    //---- Different Approach ----
    // let extractedNums = [];
    // for (let i = 0; i < arr.length; i++) {
    //   if (i % 2 !== 0) {
    //     extractedNums.push(arr[i] * 2);
    //   }
    // }
    // console.log(extractedNums.reverse().join(' '));
    
  }