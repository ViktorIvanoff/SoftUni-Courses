function solve(arr1 = [], arr2 = []) {

    let commonElements = [];
  
    for (let arr1Element of arr1) {

      for (let arr2Element of arr2) {
          
        if (arr1Element === arr2Element && !commonElements.includes(arr1Element)) {
          commonElements.push(arr1Element);
        }
      }
    }
  
    console.log(commonElements.join('\n'));
  }