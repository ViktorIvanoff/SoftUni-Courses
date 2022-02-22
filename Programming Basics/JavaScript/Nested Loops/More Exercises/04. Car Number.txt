function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);


    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {

            for (let k = start; k <= end; k++) {

                for (let l = start; l <= end; l++) {


                    if (i > l) {

                        if (i % 2 === 0) {

                            if (l % 2 !== 0) {

                                if ((i - l) % 2 !== 0 && (j + k) % 2 === 0) {

                                    console.log(`${i}${j}${k}${l} `);

                                }

                            }
                        }

                    }

                }
            }

        }
    }


}