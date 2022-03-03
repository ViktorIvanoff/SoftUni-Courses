function solve(arr = []) {

    let vip = [];
    let regular = [];
    let reservation = arr.shift();

    while (reservation !== 'PARTY') {

        if (/^\d+/.test(reservation)) {
            vip.push(reservation);
        } else {
            regular.push(reservation);
        }
        reservation = arr.shift();
    }
  
    for (let guest of arr) {

        if (vip.indexOf(guest) >= 0) {
            vip.splice(vip.indexOf(guest), 1);
        }
        if (regular.indexOf(guest) >= 0) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }
  
    console.log(vip.length + regular.length);
    vip.forEach(el => console.log(el));
    regular.forEach(el => console.log(el));
    
  }