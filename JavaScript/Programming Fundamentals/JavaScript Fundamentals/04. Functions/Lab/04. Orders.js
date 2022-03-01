function totalPrice(product, quantity) {

    const menu = {
      'coffee' : price => quantity * 1.50,
      'water' : price => quantity * 1.00,
      'coke' : price => quantity * 1.40,
      'snacks' : price => quantity * 2.00,
    }
  
    return menu[product](quantity).toFixed(2);
    
  }
  