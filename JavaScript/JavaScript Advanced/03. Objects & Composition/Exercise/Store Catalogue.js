function solve(input) {
  // ['Appricot : 20.4',
  // 'Fridge : 1500',
  // 'TV : 1499',
  // 'Deodorant : 10',
  // 'Boiler : 300',
  // 'Apple : 1.25',
  // 'Anti-Bug Spray : 15',
  // 'T-Shirt : 10']

  // You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order. 
  // Input
  // The input comes as an array of strings. Each element holds info about a product in the following format:
  // "{productName} : {productPrice}"
  // The product’s name will be a string, which will always start with a capital letter, and the price will be a number. There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
  // Output
  // As output, you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names. For more info check the examples.
  let object = {};

  for (const item of input) {

      let [product, price] = item.split(' : ');
      let firstLetter = product[0];
      price = Number(price);

      if (object[firstLetter] === undefined) {
          // if we dont have the product, we create the object structure
          object[firstLetter] = {};
      }
      // otherwise, if we already have the product, we add the price
      object[firstLetter][product] = price;
  }

 // after creating the database, we need to sort the products and print the result
 let sortedLetters = Object.keys(object).
 sort((a, b) => a.localeCompare(b));

  for (const product of sortedLetters) {

      console.log(`${product}`);

  let sortedProducts = Object.keys(object[product]).
  sort((a, b) => a.localeCompare(b));

      for (const name of sortedProducts) {
      console.log(`  ${name}: ${object[product][name]}`);
      }
  }
  
//   A
//     Anti-Bug Spray: 15
//     Apple: 1.25
//     Appricot: 20.4
//   B
//     Boiler: 300
//   D
//     Deodorant: 10
//   F
//     Fridge: 1500
//   T
//     T-Shirt: 10
//     TV: 1499 
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
