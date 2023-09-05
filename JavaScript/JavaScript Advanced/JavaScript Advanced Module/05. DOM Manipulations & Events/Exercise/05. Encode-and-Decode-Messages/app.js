function encodeAndDecodeMessages() {
//     In this problem, you should create a JS functionality that encodes and decodes some messages which travel to 
//     the network.

//     This program should contain two functionalities.

// The first one is to encode the given message and send it to the receiver. 

// The second one is to decode the received message and read it (display it).

// When the [Encode and send it] button is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:
// •	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, that represents the current character in that message
// •	Clear the sender textarea and add the encoded message to the receiver textarea

// After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:
// •	Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
// •	Replace the encoded message with the already decoded message in the receiver textarea, to make it readable

// select buttons
let buttons = Array.from(document.querySelectorAll('#main button'));
// select textarea
let textarea = Array.from(document.querySelectorAll('textarea'));

// add event listeners
buttons[0].addEventListener('click', encode);
buttons[1].addEventListener('click', decode);

function encode(e) {
    // When the [Encode and send it] button is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:
    // •	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, that represents the current character in that message
    // •	Clear the sender textarea and add the encoded message to the receiver textarea
    let encodedMessage = '';
    let input = textarea[0].value;

    for (let i = 0; i < input.length; i++) {

        encodedMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
    }

    textarea[1].value = encodedMessage;
    textarea[0].value = '';
}

function decode(e) {
    // After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:
// •	Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
// •	Replace the encoded message with the already decoded message in the receiver textarea, to make it readable
let decodedMessage = '';
let input = textarea[1].value;

for (let i = 0; i < input.length; i++) {

    decodedMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
}

textarea[1].value = decodedMessage;

}

}