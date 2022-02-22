function solve(input) {

    let a = Number(input.shift());
    let b = Number(input.shift());
    let maxCountPass = Number(input.shift());
    let output = '';
    let counter = 0;
    let firstLetter = 35;
    let secondLetter = 64;
    let isOver=false;
 
    for (let j = 1; j <= a; j++) {

        for (let k = 1; k <= b; k++) {
 
            let strJ = String.fromCharCode(firstLetter);
            let strK = String.fromCharCode(secondLetter);
            output += `${strJ}${strK}${j}${k}${strK}${strJ}|`;
 
            firstLetter++;
            secondLetter++;
            counter++;

            if (counter >= maxCountPass) {
                isOver=true;
                break;
            }
            if (firstLetter >= 55) {
                firstLetter = 35;
            }

            if (secondLetter >= 96) {
                secondLetter = 64;
            }

        } if(isOver) {
            break;
        }
    }
    console.log(output);
}