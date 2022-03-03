function storeUniqueSequences(arr = []) {

    for (let i = 0; i < arr.length; i++) {

      arr[i] = JSON.parse(arr[i]).sort((a, b) => b - a);
    }
  
    for (let i = 0; i < arr.length - 1; i++) {

      let sortedString = arr[i].toString();
  
      for (let j = i + 1; j < arr.length; j++) {

        let sortedString2 = arr[j].toString();
        
        if (sortedString === sortedString2) {

          arr.splice(j, 1);
          j--;
        }
      }
    }
  
    arr.sort((a, b) => a.length - b.length);
  
    for (let item of arr) {

      console.log(`[${item.join(', ')}]`);
      
    }
  }