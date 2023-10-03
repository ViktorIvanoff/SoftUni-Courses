function getInfo() {
  // take all input fields
  // fetch data from server
  //display and process data
  // fill html with data from server
  //catch error
    const stopIdElement = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
    const ulElement = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdElement}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        stopNameElement.textContent = data.name;
        ulElement.innerHTML = '';

        let buses = data.buses;
        Object.keys(buses).forEach(bus => {
           let liElement = document.createElement('li');
           liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
           ulElement.appendChild(liElement);
        })
    })
    .catch(error => {
        stopNameElement.textContent = "Error";
        ulElement.innerHTML = '';
    })












}