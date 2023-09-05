function solve(volumePoolLitres, debitFirstPipe, debitSecondPipe, hoursMissing) {

    volumePoolLitres = Number(volumePoolLitres);
    debitFirstPipe = Number(debitFirstPipe);
    debitSecondPipe = Number(debitSecondPipe);
    hoursMissing = Number(hoursMissing);
    
    volumeActualPoolP1 = debitFirstPipe * hoursMissing;
    volumeActualPoolP2 = debitSecondPipe * hoursMissing;
    volumeActualPoolTotal = volumeActualPoolP1 + volumeActualPoolP2;
    
    volumeActualPoolTotalPercent = (volumeActualPoolTotal * 100) / volumePoolLitres;
    totalPipe1 = (volumeActualPoolP1 * 100) / volumeActualPoolTotal;
    totalPipe2 = (volumeActualPoolP2 * 100) / volumeActualPoolTotal;
    
    if (volumeActualPoolTotal < volumePoolLitres) {
        console.log(`The pool is ${volumeActualPoolTotalPercent.toFixed(2)}% full. Pipe 1: ${totalPipe1.toFixed(2)}%. Pipe 2: ${totalPipe2.toFixed(2)}%.`);
    } else  { 
        console.log(`For ${hoursMissing} hours the pool overflows with ${volumeActualPoolTotal - volumePoolLitres} liters.`);
    }
    }