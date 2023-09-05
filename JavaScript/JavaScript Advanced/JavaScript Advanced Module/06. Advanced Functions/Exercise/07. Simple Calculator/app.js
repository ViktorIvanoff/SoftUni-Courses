function calculator() {
    // Create a function calculator which returns an object that can modify the DOM. The returned object should support the following functionality: 

    // •	init (selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors. 

    // •	add () - adds the numerical value of the element corresponding to selector1 to the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector. 

    // •	subtract () - subtracts the numerical value of the element corresponding to selector1 from the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector.
    let num1;
    let num2;
    let result;

    function init(selector1, selector2, resultSelector) {

        num1 = document.querySelector(selector1);
        num2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    function add() {
        result.value = Number(num1.value) + Number(num2.value);
    }

    function subtract() {
        result.value = Number(num1.value) - Number(num2.value);
    }

    return {
        init,
        add,
        subtract
    }
    
}
const calculate = calculator(); 
calculate.init('#num1', '#num2', '#result'); 



