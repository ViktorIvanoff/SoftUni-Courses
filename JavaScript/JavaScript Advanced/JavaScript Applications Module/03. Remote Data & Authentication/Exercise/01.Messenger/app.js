function attachEvents() {

    const requestsUrl = 'http://localhost:3030/jsonstore/messenger';
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const messagesTextArea = document.getElementById('messages');

    submitBtn.addEventListener('click', onSubmit);
    refreshBtn.addEventListener('click', onRefresh);

    async function onSubmit(ev) {

        try {
     
            const author = document.querySelector('input[name="author"]');
            const content = document.querySelector('input[name="content"]');

      
            if(author.value == '' || content.value == '') {
               alert('Fields cannot be empty!');
            }

            const message = {
                author: author.value,
                content: content.value
            }

            const response = await fetch(requestsUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            if(response.ok === false) {
                let error = await response.json();
                throw new Error(error.message);
            }
            
            const data = await response.json();
            messagesTextArea.value += `${data.author}: ${data.content}`;

            author.value == '';
            content.value == '';
        } 
        catch(error) {
            console.log(error);
        }
    }

    async function onRefresh(ev) {
        try {
   
            const response = await fetch(requestsUrl);
            
            if(response.ok === false) {
                let error = await response.json();
                throw new Error(error.message);
            }

            const data = await response.json();
            
            messagesTextArea.value += Object.values(data)
            .map( ({ author, content }) => `${author}: ${content}`).join('\n');
        } 
        catch(error) {
            console.log(error);
        }
    }
}

attachEvents();