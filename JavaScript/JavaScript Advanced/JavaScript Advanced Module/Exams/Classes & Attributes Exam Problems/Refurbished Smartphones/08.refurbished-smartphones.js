class RefurbishedSmartphones{
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }
    addSmartphone(model, storage, price, condition) {
    //'Samsung S20 Ultra', 256,    1000, 'good'

    //     This method should add a new smartphone to the retailer. The method accepts 4 arguments:
    // •	If any of the following requirements is NOT fulfilled, an error with the following message should be thrown: "Invalid smartphone!"
    // o	Model – non-empty string;
    // o	Storage – positive integer number;
    // o	Price – positive number;
    // o	Condition – non-empty string;
    // Hint: Zero is also a positive number.
        if(model === '' || storage < 0 || price < 0 || condition === '') {
                throw new Error("Invalid smartphone!");
        } else {
            storage = Number(storage);
            price = Number(price);
            this.availableSmartphones.push( {model, storage, price, condition} );
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
        }
    // •	Otherwise, you should add the smartphone, with properties: {model, storage, price, condition} to the availableSmartphones array and return:
    // "New smartphone added: {model} / {storage} GB / {condition} condition - {price}$"
    // •	When returning the result, the Price must be rounded to the second decimal point!
    }

    sellSmartphone(model, desiredStorage){
 // ('Samsung S20 Ultra',     256));
        desiredStorage = Number(desiredStorage);
//         This method should search for a smartphone with the given model in the availableSmartphones array, and then sell it. Accepts 2 arguments.
// •	If a smartphone with the given model cannot be found, an error with the following message should be thrown:
// "{model} was not found!"
        let soldPrice = 0;
        let phone = this.availableSmartphones.find(x => x.model === model);
        if(!phone) {
            throw new Error(`${model} was not found!`);
        } else {
            if(phone.storage >= desiredStorage) {
                soldPrice = phone.price;
            } else if(Math.abs(phone.storage - desiredStorage) <= 128) {
                soldPrice = phone.price - (phone.price * 0.1);

            } else if(Math.abs(model.storage - desiredStorage) > 128) {
                soldPrice = phone.price - (phone.price * 0.2);
            }
        }
        this.availableSmartphones = this.availableSmartphones.filter(x => x != phone);
        this.soldSmartphones.push( {model: phone.model, storage: phone.storage, soldPrice} );
        this.revenue += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
// •	If you find the smartphone with the given model, you should look up its storage. The person who wants to buy it has a simple request. He is looking for a smartphone with a storage that is more or equal to his desired storage. To ensure the sale of the smartphone you must make a bargain:
// o	If the found smartphone’s storage is more than or equal to the desiredStorage – the price stays the same!
// o	If the difference between the smartphone’s storage and the desiredStorage is less or equal to 128 GB – the price gets deducted by 10%!
// o	If the difference between the smartphone’s storage and the desiredStorage is more than 128 GB  – the price gets deducted by 20%!
// •	You should remove the smartphone from the availableSmartphones array and add it to the soldSmartphones array in the following format: {model, storage, soldPrice}
// •	Finally, you must add the soldPrice to the revenue and return:
// "{model} was sold for {soldPrice}$"
// Note: soldPrice must be rounded to the second decimal point!
    }

    upgradePhones() {
//         This method should find the storage for every available smartphone and double it, then return them separated by a new line in format:
// " Upgraded Smartphones:
// {model} / {storage} GB / {condition} condition / {price}$
// {model} / {storage} GB / {condition} condition / {price}$"
// Note: price must be rounded to the second decimal point!
// Note: storage must be updated to availableSmartphones array!
// •	If there are no available smartphones, throw:
// "There are no available smartphones!"
        if(this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        } else {
            this.availableSmartphones = this.availableSmartphones
            .map((s) => {
                let doubledStorage = s.storage * 2;
                let roundedPrice = s.price.toFixed(2);
                return {
                    ...s,
                    storage: doubledStorage,
                    price: roundedPrice,
                }
            });
        }

        let phones = this.availableSmartphones
        .map((s) => 
            `${s.model} / ${s.storage} GB / ${s.condition} condition / ${s.price}$`
        ).join('\n');

        return `Upgraded Smartphones:\n${phones}`;
    }

    salesJournal(criteria) {
    //     This method accepts 1 argument.  It should sort the sold smartphones, based on a given criteria. The two possible criteria are – "storage" or "model"
    // •	If the given criteria do not match either of the possible criteria, an error with the following message should be thrown:
    // "Invalid criteria!"
        let result = [];
        result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);

        if(criteria === 'storage'){
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);

        } else if(criteria === 'model') {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!");
        }

        result.push(`${this.soldSmartphones.length} smartphones sold:`);
        this.soldSmartphones.forEach(s => 
            result.push(`${s.model} / ${s.storage} GB / ${(s.soldPrice).toFixed(2)}$`
            ));

        return result.join('\n');
    }
    // SecondLife Devices has a total income of 1297.00$
    // 2 smartphones sold:
    // Samsung S20 Ultra / 256 GB / 1000.00$
    // Xiaomi Redmi Note 10 Pro / 128 GB / 297.00$

    // •	If the given criteria is "storage" – the sold smartphones must be sorted by their storage in descending order;
    // •	If the given criteria is "model" – the sold smartphones must be sorted alphabetically by their model;
    // •	Finally, return all sorted sold smartphones separated by a new line in format:
    // "{ RetailerName} has a total income of { revenue }$
    // {soldSmartphonesCount} smartphones sold:
    // {model} / {storage} GB / {price}$
    // {model} / {storage} GB / {price}$"
    // …
    // Note: revenue and price must be rounded to the second decimal point!
    
    // SecondLife Devices has a total income of 1297.00$
    // 2 smartphones sold:
    // Samsung S20 Ultra / 256 GB / 1000.00$
    // Xiaomi Redmi Note 10 Pro / 128 GB / 297.00$
} 
let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));






