function solve(input) {

    let end1 = Number(input[0]);
    let end2 = Number(input[1]);
    let end3 = Number(input[2]);

    for (let i = 2; i <= end1; i += 2) {

        for (let j = 2; j <= end2; j++) {

            for (let k = 2; k <= end3; k += 2) {

                if (i % 2 === 0) {

                    if (j === 2 || j === 3 || j === 5 || j === 7) {

                        if (k % 2 === 0) {

                            console.log(`${i} ${j} ${k}`);

                        }
                    }

                }

            }
        }
    }

}