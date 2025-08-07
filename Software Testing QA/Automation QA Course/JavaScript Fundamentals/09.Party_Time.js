// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists. 
// The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
// All VIP numbers start with a digit.
// When you receive the command "PARTY", the guests start coming.
// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first). 
// Hint: Guest names are not unique. Only the first match is removed when receiving a name.

function partyTime(input) {
    const vip = new Set();
    const regular = new Set();

    let i = 0;

    // Add guests to reservation sets until 'PARTY'
    while (input[i] !== 'PARTY') {
        const guest = input[i];
        if (/\d/.test(guest[0])) {
            vip.add(guest);
        } else {
            regular.add(guest);
        }
        i++;
    }

    // Move to the part after 'PARTY'
    i++;

    // Guests arrive and are removed from sets
    while (i < input.length) {
        const guest = input[i];
        vip.delete(guest);
        regular.delete(guest);
        i++;
    }

    // Remaining guests = those who didn't show up
    console.log(vip.size + regular.size);
    
    // Print VIP guests first
    vip.forEach(guest => console.log(guest));
    regular.forEach(guest => console.log(guest));
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);