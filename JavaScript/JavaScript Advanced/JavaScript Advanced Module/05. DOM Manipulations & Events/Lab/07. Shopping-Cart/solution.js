function solve() {
   // You will be given some products that you should be able to add to your cart. Each product will have a name, picture, and price.

   // When the "Add" button is clicked, append the current product to the textarea in the following format: "Added {name} for {money} to the cart.\n". The price must be fixed to the second digit.

   // When the button "Checkout" is clicked, calculate the total money that you need to pay for the products that are currently in your cart. Append the result to the textarea in the following format: 

   // "You bought {list} for {totalPrice}."

   // The list should contain only the unique products, separated by ", ". The total price should be rounded to the second decimal point.

   // Also, after clicking over "Checkout" and every from above is done you should disable all buttons. (You can't add products or checkout again if once the checkout button is clicked).
   const textArea = document.querySelector('textarea');
   const addButtons = document.querySelectorAll('.add-product');
   let uniqueProducts = [];
   let totalPrice = 0;

   for (let button of addButtons) {
      // create event listeners to all buttons 
      button.addEventListener('click', addProduct);
   }

   // create event listener for check out button
   const checkOutButton = document.querySelector('.checkout');
   checkOutButton.addEventListener('click', checkOut);

   function addProduct(event) {
// When the "Add" button is clicked, append the current product to the textarea in the following format: "Added {name} for {money} to the cart.\n". The price must be fixed to the second digit.
      let product = event.target.parentElement.parentElement;
      let name = product.querySelector('.product-title').textContent;
      let money = product.querySelector('.product-line-price').textContent;
      // calc total money
      totalPrice += Number(money);

// The list should contain only the unique products, separated by ", ". The total price should be rounded to the second decimal point.
      if (!uniqueProducts.includes(name)) {
         uniqueProducts.push(name);
      }

      textArea.textContent += `Added ${name} for ${Number(money).toFixed(2)} to the cart.\n`;
   }

   function checkOut(event) {
// When the button "Checkout" is clicked, calculate the total money that you need to pay for the products that are currently in your cart. Append the result to the textarea in the following format: 
   // "You bought {list} for {totalPrice}."
   textArea.textContent += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

   // remove event listeners from all add buttons
   for (let button of addButtons) {
      button.removeEventListener('click', addProduct);
   }
   
   // after check out button is clicked, remove event listener from check out button as per problem condition
   checkOutButton.removeEventListener('click', checkOut);
   }
}