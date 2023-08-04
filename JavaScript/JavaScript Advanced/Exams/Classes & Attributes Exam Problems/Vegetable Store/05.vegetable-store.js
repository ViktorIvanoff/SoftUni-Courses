class VegetableStore{
    // Constructor
    // Should have these 3 properties:
        constructor(owner, location) {
            this.owner = owner;
            this.location = location;
            this.availableProducts = [];
        }
        loadingVegetables(vegetables){
            // ["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]
        // This method makes loading of the products in the store. The method takes 1 argument: vegetables (array of strings).
        // •	Every element into this array is information about vegetable in the format:
        // "{type} {quantity} {price}"
        // o	They are separated by a single space. The quantity and price are per unit kilogram.    Example: ["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2"…]
        let uniqueTypes = [];
        vegetables.forEach(v => {
                let [type, quantity, price] = v.split(' ');
                quantity = Number(quantity);
                price = Number(price);

                let product = this.availableProducts.find(p => p.type === type);
                if(product) {
                    product.quantity += quantity;
                    if(price > product.price) {
                        product.price = price;
                    }
                } else {
                    this.availableProducts.push( {type, quantity, price} );
                    uniqueTypes.push(type);
                }
            });

            return `Successfully added ${uniqueTypes.join(', ')}`;
        // •	If the type of the current vegetable is already present in availableProducts array, add the new quantity to the old one and update the old price per kilogram only if the current one is higher.
        // •	Otherwise, should add the vegetable, with properties: {type, quantity, price} to the availableProducts array.
        // •	In all cases, you must finally return a string in the following format:
        // `Successfully added {type1}, {type2}, …{typeN}`
        //        Note: When returning the string, keep in mind that the different types of vegetables must be:
        // •	Unique - for instance: 
        // o	"Successfully added Okra, Beans, Celery" - is a correctly returned string
        // o	"Successfully added Okra, Beans, Okra" - is not a correctly returned string
        // •	Separated by comma and space (, )
    }        
       
    buyingVegetables(selectedProducts){
        // ["Beans 8", "Celery 1.5"]
        //  type  quantity
        let totalPrice = 0;
// With this method, customers can buy products from the store. The method takes 1 argument: selectedProducts (array of strings).
// •	Every element in this array is information about the selected vegetables in the format: 
// "{type} {quantity}"
            for (let item of selectedProducts) {
                let [type, quantity] = item.split(' ');
                quantity = Number(quantity);
                let product = this.availableProducts.find(p => p.type === type);

                if(!product) {
                    throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }

                if(quantity > product.quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                } else {
                    let price = product.price * quantity;
                    product.quantity -= quantity;
                    totalPrice += price;
                }
            }
            return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
        
        }

        rottingVegetable(type, quantity){
// With this method, the freshness of the vegetables in the store is preserved, removing the rotting vegetables. The method takes 2 arguments: 
// o	type (string)
// o	quantity (number)
// ("Okra", 2.5));
            quantity = Number(quantity);
// •	If the submitted type is not present in the availableProducts array, an error with the following message should be thrown:
//   `{type} is not available in the store.`
    let product = this.availableProducts.find(p => p.type === type);

    if(!product) {
        throw new Error(`${type} is not available in the store.`);
    }
// •	If the submitted quantity is greater than the quantity recorded in the availableProducts array, then the value of the quantity in the array becomes zero, and return the following string:
//    `The entire quantity of the {type} has been removed.`
    if(quantity > product.quantity) {
        product.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
    } else {
        product.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }
// •	Otherwise, reduce the quantity recorded in the array availableProducts with the quantity obtained as a parameter, and return the string in the following format:
//   `Some quantity of the {type} has been removed.`
    }

    revision() {
        let result = [];
// •	This method returns all available products in the store in the following format:
// o	The first line shows the following message:
// "Available vegetables:"
        result.push("Available vegetables:");
// o	On the new line, display information about each vegetable sorted in ascending order of price:
// `{type}-{quantity}-${price}`
        this.availableProducts.sort((a, b) => a.price - b.price).
        map(p => result.push(`${p.type}-${p.quantity}-$${p.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
// o	The last line shows the following message:
// `The owner of the store is {owner}, and the location is {location}.`

//         Available vegetables:
        // Celery-4.5-$2.5
        // Beans-2-$2.8
        // Okra-0-$3.5
        // The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

