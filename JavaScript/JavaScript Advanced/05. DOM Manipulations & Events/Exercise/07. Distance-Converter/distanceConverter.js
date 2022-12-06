function attachEventsListeners() {
  //     Your task is to convert from one distance unit to another by adding a click event listener to a button. When it is clicked, read the value from the input field and get the selected option from the input and output units dropdowns. Then calculate and display the converted value in the disabled output field.

  //     •	Multiply the incoming distance by the following conversion rates to convert to meter
  // •	Divide to convert from meters to the required output unit
  // •	To see which option is selected, read the properties of its parent: value gives you the value of the selected option (as displayed in the HTML), selectedIndex gives you the 0-based index of the selected option. For example, if miles are selected, inputUnits.value is "mi", inputUnits.selectedIndex is 4. Option text is irrelevant
  // •	Use the following table information to do that:

  // 1 km	1000 m
  // 1 m	1 m
  // 1 cm	0.01 m
  // 1 mm	0.001 m
  // 1 mi	1609.34 m
  // 1 yrd	0.9144 m
  // 1 ft	0.3048 m
  // 1 in	0.0254 m

  // select convert button and add event listener to it
  let convertButton = document.getElementById('convert');
  convertButton.addEventListener('click', conversion);
  // create object for conversion of units
  let distances = {
    km: 1000,
    m: 1,
    m: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

 

  function conversion(event) {
    // select input and output values of select drop down menu
    let fromValue = document.getElementById('inputUnits').value;
    let toValue = document.getElementById('outputUnits').value;

    // select input distance and convet it to number
    let inputDistance = Number(document.getElementById('inputDistance').value);
    // select output distance
    let outputDistance = document.getElementById('outputDistance');

    // convert inputDistance to meters using distance object
    let valueInMeters = inputDistance * distances[fromValue];
    let convertValue = valueInMeters / distances[toValue];

    outputDistance.value = convertValue;
  }
}
