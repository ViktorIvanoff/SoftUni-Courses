function solve(input) {

    let heritageMoney = Number(input[0]);
    let endYear = Number(input[1]);
    let ivanAge = 18;
    let startYear = 1800;


    for (let i = startYear; i <= endYear; i++) {

        if (i % 2 == 0) {

            heritageMoney -= 12000;

        } else {

            heritageMoney -= 12000 + (ivanAge * 50);

        }

        ivanAge++;
    }


    if (heritageMoney < 0) {

        console.log(`He will need ${Math.abs(heritageMoney).toFixed(2)} dollars to survive.`);

    } else {

        console.log(`Yes! He will live a carefree life and will have ${heritageMoney.toFixed(2)} dollars left.`);
    }

}