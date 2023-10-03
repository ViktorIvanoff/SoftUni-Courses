function solve() {
    // take elements
    const infoBoxElement = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    //create initial object with depot
    let stop = {
        next: 'depot'
    }

    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            //{name: 'Depot', next: '0361'}
            stop = JSON.parse(JSON.stringify(data));
            infoBoxElement.textContent = `Next stop ${stop.name}`;
        })
        .catch(error => {
            console.log(error);
        })
        
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        infoBoxElement.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();