function printDeckOfCards(cards) {

    let sequence = [];

   for (let i = 0; i < cards.length; i++) {
    let face = cards[i].slice(0, -1);
    let suit = cards[i].slice(-1);

           // validate card definition
       try {
            const card = createCard(face, suit);
            sequence.push(card);
       } 
       
       catch (err) {
            sequence = [`Invalid card: ${cards[i]}`];
       }

   }

   console.log(sequence.join(' '));

    function createCard(face, suit){

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suits = {
    'S': '\u2660',
    'H': '\u2665',
    'D': '\u2666',
    'C': '\u2663'
}

// validate card face

    if (faces.indexOf(face) == -1) {
        throw new Error(`Invalid face: ${face}`);
    }

    // validate card suit 
    if (suits[suit] === undefined) {
        throw new Error(`Invalid suit: ${face}`);
    }


    // construct card obj

    const card = {
        face: face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit
        }
    };

    return card;

    }

  }
printDeckOfCards(['AS', '10D', 'KH', '2C']);

printDeckOfCards(['5S', '3D', 'QD', '1C']);
