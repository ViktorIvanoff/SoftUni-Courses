function solve() {
//     Write a function that converts a decimal number to binary and hexadecimal.

//     The given number will always be in decimal format. The "From" select menu will only have a Decimal option,
// but the "To" select menu will have two options: Binary and Hexadecimal. 
// This means that our program should have the functionality to convert decimal to binary and decimal to hexadecimal. When you convert to hexadecimal it must be upper case.
// Note that the "To" select menu by default is empty. You have to insert the two options ('Binary' and 'Hexadecimal') inside before continuing. Also, they should have values ('binary' and 'hexadecimal').
// •	When the [Convert it] button is clicked, the expected result should appear in the [Result] input field.

    // we create the binary option element
    // we set its value to 'binary'
    // and its innerHTML to 'binary' as well
    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.innerHTML = 'Binary';

    // we create the hexadecimal option element
    // we set its value to 'hexadecimal'
    // and its innerHTML to 'Hexadecimal' as well
    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.innerHTML = 'Hexadecimal';

    // we take the selectMenu
    // appendChild to it the two options that we just created
    let selectMenu = document.getElementById('selectMenuTo');
    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption);
   
    let converted = 0;
    // we create an empty number variable for the calculation
      // we take from the button collection the addEventListener and create a click function
    document.getElementsByTagName('button')[0].addEventListener('click', function() {

        let decimal = Number(document.getElementById('input').value);
        let convertTo = document.getElementById('selectMenuTo').value;

        if (convertTo === 'binary') {

            converted = decimal.toString(2);
            result = document.getElementById('result');
            result.value = converted;

        } else if (convertTo === 'hexadecimal') {

            converted = decimal.toString(16).toUpperCase();
            result = document.getElementById('result');
            result.value = converted;

        } else {
            
        }
    });
}