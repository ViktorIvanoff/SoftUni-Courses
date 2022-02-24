function solve(input) {

    let length = input[0];
    let width = input[1];
    
    let lengthCm = length * 100;
    let widthCm = width * 100;
    
    let workPlaceWidthCm = 70;
    let workPlaceLengthCm = 120;
    let corridorCm = 100;
    let placesForCatedraAndDoor = 3;
    
    let hallWithoutCorridor = widthCm - corridorCm;
    
    let burosCount = Math.trunc (hallWithoutCorridor / workPlaceWidthCm);
    let rowsCount = Math.trunc (lengthCm / workPlaceLengthCm);
    let places = (burosCount * rowsCount) - placesForCatedraAndDoor;
    
    console.log(places);
    
    
    }