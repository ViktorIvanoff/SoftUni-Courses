function solve(input) {
    // ['24 50 36 70', '0', '4', '3', '1', 'End']
    // - 1 26 12 46   = first iteration  - index = 0
    // invalid index = second iteration - index = 4 (outside array)
    // -1 72 58 -1 =   third iteration   - index = 3
    // -1 -1 130 -1 =  fourth iteration  - index = 1
    // command "End"
    // output: -1 -1 130 -1 
    let targets = input.shift().split(" ").map(Number);
    let shotTargets = 0;

    for (let i = 0; i < input.length; i++) {

        if (input[i] === "End") {
            break;
        }

        let index = Number(input[i]);
        let currentTarget = Number(targets[index]);

        if (index >= 0 && index < targets.length) {

            for (let i = 0; i < targets.length; i++) {

                if (i === index) {

                    targets[i] = -1;

                } else if (targets[i] == -1) {

                    targets[i] = -1;

                } else {

                    if (targets[i] > currentTarget) {

                        targets[i] -= currentTarget;

                    } else if (targets[i] <= currentTarget) {

                        targets[i] += currentTarget;
                    }
                }
            }
        }
    }


    for (let i = 0; i < targets.length; i++) {

        if (targets[i] == -1) {
            shotTargets++;
        }
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);

}
