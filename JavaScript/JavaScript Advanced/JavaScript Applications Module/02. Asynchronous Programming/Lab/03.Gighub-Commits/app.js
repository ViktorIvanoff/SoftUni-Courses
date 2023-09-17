function loadCommits() {
    // Try it with Fetch API
   // take input fields
   const username = document.getElementById('username').value;
   const repo = document.getElementById('repo').value;
   const list = document.getElementById('commits');

   // take url
   const url = `https://api.github.com/repos/${username}/${repo}/commits`;

   // send request
   fetch(url)
	.then(responseHandler)
	.then(displayData)
	.catch(handleError)

    function responseHandler(res) {
        if(res.ok == false) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        return res.json();
    }

    function displayData(data) {
        // empty li
        list.innerHTML = '';

        for (let { commit } of data) {
            const li = document.createElement('li');
            li.textContent = `${commit.author.name}: ${commit.message}`;
            list.appendChild(li);
        }
    }

    function handleError(err) {
        const li = document.createElement('li');
        li.textContent = `Error: ${err.message} (Not Found)`;
        list.appendChild(li);
    }
}