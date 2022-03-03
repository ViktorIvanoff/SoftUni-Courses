function solve(stockTokens = [], productTokens = []) {

    let products = [];
  
    while (stockTokens.length !== 0) {

      let productName = stockTokens.shift();
      let productQty = Number(stockTokens.shift());
  
      let product = createProduct(productName, productQty);
      products.push(product);
    }
  
    while (productTokens.length !== 0) {
        
      let productName = productTokens.shift();
      let productQty = Number(productTokens.shift());
  
      let product = products.find(x => x.name === productName);
  
      if (product === undefined) {
        product = createProduct(productName, productQty);
        products.push(product);
      } else {
        product.quantity += productQty;
      }
    }
  
    products.forEach(x => console.log(`${x.name} -> ${x.quantity}`));
  
    function createProduct(name, quantity) { return product = { name, quantity }; }
  }