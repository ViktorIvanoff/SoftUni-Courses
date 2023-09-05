function loadRepos() {
    // take url to access repos 
    const url = 'https://api.github.com/users/testnakov/repos';

    // take div so that to put repos in it
    const res = document.getElementById('res');

    // create new instance of xmlhttprequest
    const httpRequest = new XMLHttpRequest();

    //add event listener to it
    httpRequest.addEventListener('readystatechange', () => {
        if(httpRequest.readyState === 4 && httpRequest.status === 200) {
            res.textContent = httpRequest.response;
        }
    });

    httpRequest.open('GET', url);
    httpRequest.send();

 }