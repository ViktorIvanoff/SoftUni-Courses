function towns(input) {
// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
class Town {
    constructor(town, latitute, longitude) {
        this.town = town;
        this.latitute = Number(latitute).toFixed(2);
        this.longitude = Number(longitude).toFixed(2);
    }

    printInfo() {
        return `{ town: '${this.town}', latitude: '${this.latitute}', longitude: '${this.longitude}' }`;
    }
}
    for (let line of input) {
        let [townName, latitude, longitude] = line.split(" | ");
        let town = new Town(townName, latitude, longitude);
        console.log(`{ town: '${town.town}', latitude: '${town.latitute}', longitude: '${town.longitude}' }`);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);