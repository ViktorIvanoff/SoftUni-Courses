function calculateExpensesDogFood(arg1,arg2) {

    let dogs = Number(arg1);
    let otherAnimals = Number(arg2);
    let pricePerPackDogFood = Number(2.50);
    let pricePerPackOtherAnimals = Number(4);
    
    let totalAmount = (arg1 * pricePerPackDogFood) + (arg2 * pricePerPackOtherAnimals);
    
    console.log(totalAmount);
      
    }