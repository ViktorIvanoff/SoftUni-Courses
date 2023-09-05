function loadRepos() {

	// take username and list
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');

	// send request
	fetch(`https://api.github.com/users/${username}/repos`)
	.then(handleResponse)
	.then(displayRepos)
	.catch(handleError)

	// function for error handling of response
	function handleResponse(response) {
		// if status not 200
		if(response.ok === false) {
			// display error status and text
			throw new Error(`${response.status} ${response.statusText}`);
		}
		// otherwise, if status 200, return promise json
		return response.json();
	}

	function displayRepos(data) {
		// empty list
		list.innerHTML = '';

		for (let repo of data) {
			list.innerHTML +=
			`<li>
			<a href="${repo.html_url}" target="_blank">
			${repo.full_name}
			</a>
			</li>`;
		}
	}

	//display error message in list
	function handleError() {
		list.innerHTML = `${error.message}`;
	}
}