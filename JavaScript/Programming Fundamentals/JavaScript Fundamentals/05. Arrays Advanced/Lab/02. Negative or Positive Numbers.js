function solve(arr = []) {

    let resultArr = [];
    
    while (arr.length !== 0) {

      let element = arr.shift();
      element < 0 ? resultArr.unshift(element) : resultArr.push(element);
    }
  
    for (const element of resultArr) {

      console.log(element);
    }

  }