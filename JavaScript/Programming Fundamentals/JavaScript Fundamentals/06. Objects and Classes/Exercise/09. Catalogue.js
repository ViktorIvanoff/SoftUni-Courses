function catalog(arr = []) {

    let products = new Map();

    for (let i = 0; i < arr.length; i++) {

      let [product, price] = arr[i].split(' : ');
      let key = product.charAt(0);

      product = { 
        name: product, 
        price: Number(price),
      }
  
      if (!products.has(key)) {

        products.set(key, [product]);

      } else {
        products.get(key).push(product);
      }
    }
  
    products = new Map([...products.entries()].sort()); // SORT KEYS FIRST ('B', 'C', 'A' --> 'A', 'B', 'C')

    for (let key of products.keys()) {

      products.get(key).sort((a, b) => a.name.localeCompare(b.name)); // SORT PRODUCTS BY NAME FOR EACH KEY
      // products.get(key).sort((a, b) => a.name > b.name ? 1 : -1);
    }
  
    for (let [key, value] of products) {

      console.log(key);

      for (let product of value) {
          
        console.log(`  ${product.name}: ${product.price}`)
      }
    }
  }