function solve(input) {

    let n = Number(input[0]);
    let currentNum = 1;
    let isOver = false;
    
    for (let row = 1; row <= n; row++) {
    
     let currentRow = '';
    
      for (let col = 1; col <= row; col++) {
    
       currentRow += `${currentNum} `;
    
        if (currentNum === n) {
            isOver = true;
            break;
        }
       currentNum++;
    }
     console.log(currentRow);
    
     if (isOver) {
         break;
     }
      }
    
    }