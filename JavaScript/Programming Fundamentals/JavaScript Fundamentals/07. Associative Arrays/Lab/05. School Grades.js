function solve(input) {
    // 'Lilly 4 6 6 5',
    // 'Tim 5 6',
    // 'Tammy 2 4 3',
    // 'Tim 6 6';

    // Tammy: 2, 4, 3
    // Lilly: 4, 6, 6, 5
    // Tim: 5, 6, 6, 6
    let map = new Map();

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);

        if (!map.has(name)) {
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        } else {
            map.set(name, map.get(name).concat(grades));
        }
    }

    let sorted = Array.from(map).sort((a, b) => average(a, b));

    function average(a, b) {
        let aAvg = 0;
        a[1].forEach(x => {
            aAvg += x
        });
        aAvg /= a[1].length;

        let bAvg = 0;
        b[1].forEach(x => bAvg += x);
        bAvg /= b[1].length;

        return aAvg - bAvg;
    }

    for (let value of sorted) {

        console.log(`${value[0]}: ${value[1].join(", ")}`);
    }
}