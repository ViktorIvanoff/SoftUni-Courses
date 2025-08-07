function picollo(input) {

let parking = [];

for(let line of input) {
   let direction = line.split(", ")[0];
   let plateNumber = line.split(", ")[1];
   
   if(direction === "IN") {
    if(!parking.includes(plateNumber)) {
        parking.push(plateNumber);
    }

   } else {
        //if plate number is in the parking, we need to remove it
        let index = parking.indexOf(plateNumber);
        if(index != -1) {
            parking.splice(index, 1);
        }
   }
}

    parking = parking.sort();
    if(parking.length == 0) {
        console.log("Parking Lot is Empty");
    } else {
        for(let car of parking) {
            console.log(car);
        }
    }
}
picollo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);