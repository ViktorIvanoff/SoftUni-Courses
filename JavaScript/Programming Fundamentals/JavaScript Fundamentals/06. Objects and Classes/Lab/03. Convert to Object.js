function solve(jSonToObj) {
    
    let result = JSON.parse(jSonToObj);

    for (let key of Object.keys(result)) {
        console.log(`${key}: ${result[key]}`);
    }
}