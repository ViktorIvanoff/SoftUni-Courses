function solve(text, startIndex, toSubString) {
    
    startIndex = Number(startIndex);
    toSubString = Number(toSubString);
    
    let result = text.substring(startIndex, startIndex + toSubString);
    console.log(result)
    
    }