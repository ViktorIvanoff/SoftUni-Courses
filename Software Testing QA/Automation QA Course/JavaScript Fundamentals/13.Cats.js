
function cat(array) {
    class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
   for(let cat of array) {
    let catData = cat.split(" ");
    let name = catData[0];
    let age = catData[1];
    let currentCat = new Cat(name, age);
    currentCat.meow();
   }
}
cat(['Mellow 2', 'Tom 5']);