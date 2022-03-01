function solve(products = []) {

    let counter = 1;
    products.sort().forEach(product => console.log(`${counter++}.${product}`));
    
  }