function calc() {
    // TODO: sum = num1 + num2
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let sum = Number(num1) + Number(num2);

    if (isNaN(sum)) {
        alert('Plese enter numbers!');
        
    } else {
        document.getElementById('sum').value = sum;
    }

}
