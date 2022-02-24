function reverse(elements) {

    for (let i = 0; i < elements.length / 2; i++) {

      swapElements(elements, i, elements.length - 1 - i);
    }
  
    console.log(elements.join(' '));
  
    function swapElements(arr, i, j) {

      let tempValue = arr[i];
      arr[i] = arr[j];
      arr[j] = tempValue;
      
    }
  }
  