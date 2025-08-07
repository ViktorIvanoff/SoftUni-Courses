function perfectNumber(num){
    let result = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0){ // намираме делител без остатък
            result += i
        } 
    }

    if (num === result){
        console.log('We have a perfect number!')
    } else {
        console.log('It\'s not so perfect.')
    }
}