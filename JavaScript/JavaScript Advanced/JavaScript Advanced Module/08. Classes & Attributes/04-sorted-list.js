class List {
    // •	add(element) - adds a new element to the collection
    // •	remove(index) - removes the element at position index
    // •	get(index) - returns the value of the element at position index
    // •	size - number of elements stored in the collection
    // The correct order of the elements must be kept at all times, regardless of which operation is called. Removing and retrieving elements shouldn’t work if the provided index points outside the length of the collection (either throw an error or do nothing). Note the size of the collection is not a function.
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }

    add(num) {
        this.result.push(num);
        this.size = this.result.length;
        this.result.sort((a, b) => a - b);
    }

    remove(index) {
        // first validate index
        if(index < 0 || index >= this.result.length) {
            throw new Error('Invalid index!');
        }

        // if index valid, remove element at that index
        this.result.splice(index, 1);
        this.size = this.result.length;
    }

    get(index) {
        // first validate index
        if(index < 0 || index >= this.result.length) {
            throw new Error('Invalid index!');
        }

        return this.result[index];
    }
}

let list = new List();
list.add(5);  
list.add(6);  
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
