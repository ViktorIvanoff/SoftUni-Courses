function attachEventsListeners() {
    // Create a program that converts different time units. Your task is to add a click event listener to all [CONVERT] buttons. When a button is clicked, read the corresponding input field, convert the value to the three other time units and display it in the input fields.

    // One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever button we click, the input fields should change depending on the added value on the left. (For example, if we write 48 hours and click convert the days, the field value should change to 2).

    // select all input fields by id 
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    // select all convert buttons by id 
    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');
    
    // add event listeners to all conv buttons
    daysButton.addEventListener('click', onConvert);
    hoursButton.addEventListener('click', onConvert);
    minutesButton.addEventListener('click', onConvert);
    secondsButton.addEventListener('click', onConvert);

    // create object for the different time units 
    let timeUnits = {

        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }


    function onConvert(event) {
        // select inputField
        let input = event.target.parentElement.querySelector('input[type="text"]');
        // create separate function for calculations that takes the input number and the time unit and save it in a variable
        let time = convert(Number(input.value), input.id);
        // assign return value from convert func to input fields
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }


    function convert(value, unit) {
        // divide the number value by the object in combination with the given unit (associative array)
        let days = value / timeUnits[unit];

        // the return value of the convert function is the calculations (multiply days by every unit from the times obj)
        return {

            days: days,
            hours: days * timeUnits.hours,
            minutes: days * timeUnits.minutes,
            seconds: days * timeUnits.seconds
        }
    }

}