async function solution() {
    try {
        // take url
        // take elements
        const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
        //fetch data
        const res = await fetch(url);
        
        if(!res.ok) {
            throw new Error('Error fetching articles from server!');
        }
    
        const data = await res.json();
       //title : "Scalable Vector Graphics"
    //    _id: 
    // "ee9823ab-c3e8-4a14-b998-8c22ec246bd3"
        data.forEach(obj => {
            // <!-- <div class="accordion">
            //     <div class="head">
            //         <span>Scalable Vector Graphics</span>
            //         <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
            //     </div>
            //     <div class="extra"></div>
                const accordionDiv = document.createElement('div');
                accordionDiv.className = 'accordion';
                accordionDiv.innerHTML = `
                <div class="head">
                <span>${obj.title}</span>
                <button class="button" id="${obj._id}" onclick="onClick(event)">More</button>
                </div>
                <div class="extra"></div>
                `;
    
                const mainSection = document.getElementById('main');
                mainSection.appendChild(accordionDiv);
        });
    
        } 
        catch(error) {
            console.log(error);
        }
    }
    
            async function onClick(e) {
    
                try {
                    // take button, which is the e.target , from there take url with its id
                    let button = e.target;
                    let url = `http://localhost:3030/jsonstore/advanced/articles/details/` + button.id;
                
                    //take response
                    const res = await fetch(url);
                    const data = await res.json();
    
                    if(!res.ok) {
                        throw new Error('Error fetching articles from server!');
                    }
            
                    let parent = button.parentElement.parentElement;
                    let extraDiv = parent.querySelector('div.extra');
    
                    //fill extraDiv with data
                    extraDiv.innerHTML = `<p>${data.content}</p>`;
    
                    //change textContnt and reveal hidden extraDiv
                    if(button.textContent == 'More') {
                        button.textContent = 'Less';
                        extraDiv.style.display = 'inline';
                    } else {
                        button.textContent = 'More';
                        extraDiv.style.display = 'none';
                    }
    
                } 
                catch(error) {
                    console.log(error);
                }
            }
    
    solution();