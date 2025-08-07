function common(firstArr, secondArr) {
//hello
//4
    for(let elem of firstArr) {
        if(secondArr.includes(elem)) {
            console.log(elem);
        }
    }
}
common(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);