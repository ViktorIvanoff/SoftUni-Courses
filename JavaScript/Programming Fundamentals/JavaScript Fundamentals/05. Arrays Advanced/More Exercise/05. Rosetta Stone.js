function decode(message = []) {

    let templateMatrixLenght = parseInt(message.shift());
    let templateMatrix = [];
  
    for (let i = 0; i < templateMatrixLenght; i++) {

      templateMatrix[i] = message.shift().split(' ').map(Number);
    }
  
    for (let row = 0; row < message.length; row++) {

      message[row] = message[row].split(' ').map(Number);
    }
  
    let r = 0;  // TEMPLATE MATRIX ROW
    let c = 0;  // TEMPLATE MATRIX COLUMN
  
    for (let row = 0; row < message.length; row++) {

      for (let i = 0; i < message[row].length; i++) {  
          z                                       
        message[row][i] += templateMatrix[r][c];  // SUM VALUES FROM TEMPLATE AND MESSAGE MATRIX ||| 4 + 59 = 63 -> X ||| Number of symbols on the stone = 27 -> Y |
        message[row][i] -= (parseInt(message[row][i] / 27) * 27); // DECODE VALUE ||| Formula -> X - (parseInt(X / Y) * Y)
                                                                 //               |||           63 - (parseInt(63 / 27) * 27) --> 63 - (2 * 27) = 9 ---> "I" from Stone
  
        message[row][i] += 64;  // 1("A" from stone) + 64("@" from ASCII) = 65 ("A" in ASCII TABLE)) |||   9("I") + 64("@") = 73("I" in ASCII)
  
        templateMatrix[r].length - 1 > c ? c++ : c = 0;
      }
  
      c = 0;
      templateMatrix.length - 1 > r ? r++ : r = 0;
    }
  
    let decodedMessage = '';
    message.forEach(row => row.forEach(x => decodedMessage += (x !== 64) ? String.fromCharCode(x) : " ")); // IF symbol is equal to 64("@") append whitespace instead
    
    return decodedMessage;
  }