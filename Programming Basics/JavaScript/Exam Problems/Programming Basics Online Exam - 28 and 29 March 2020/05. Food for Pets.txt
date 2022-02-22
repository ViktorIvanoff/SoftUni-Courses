function solve(input) {

    let days = Number(input.shift());
    let food = Number(input.shift());

    let biscuits = 0;
    let dogEaten = 0;
    let catEaten = 0;

    for (i = 1; i <= days; i++) {

        let dogFood = Number(input.shift());
        let catFood = Number(input.shift());

        dogEaten += dogFood;
        catEaten += catFood;

        if (i % 3 == 0) {

            biscuits += (dogFood + catFood) * 0.1;

        }

    }

    let totalEaten = dogEaten + catEaten;

    console.log(`Total eaten biscuits: ${Math.floor(biscuits)}gr.`)
    console.log(`${(totalEaten / food * 100).toFixed(2)}% of the food has been eaten.`)
    console.log(`${(dogEaten / totalEaten * 100).toFixed(2)}% eaten from the dog.`)
    console.log(`${(catEaten / totalEaten * 100).toFixed(2)}% eaten from the cat.`)
}