function addAndSubtract(a, b, c) {

    function add(a, b) { return a + b; }
    function subtract(a, b) { return a - b; }
  
    let addResult = add(a, b);
    let subtractResult = subtract(addResult, c);
    
    return subtractResult;
    
  }