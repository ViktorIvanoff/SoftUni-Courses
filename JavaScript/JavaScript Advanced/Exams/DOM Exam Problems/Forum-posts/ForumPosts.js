window.addEventListener("load", solve);

function solve() {
 
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content'),
  }

  const lists = {
    review: document.getElementById('review-list'),
    publish: document.getElementById('published-list')
  }

  const publishBtn = document.getElementById('publish-btn');
  const clearBtn = document.getElementById('clear-btn');
  publishBtn.addEventListener('click', publish);
  clearBtn.addEventListener('click', clear);

  function publish(event) {
    event.preventDefault();
    // read input fields
    const title = input.title.value;
    const category = input.category.value;
    const content = input.content.value;
    // validate input
    // o	Title, category, and content are non-empty strings. If any of them are empty, the program should not do anything.
    if(title == '' || category == '' || content == '') {
      return;
    }

    const liElement = document.createElement('li');
    liElement.className = 'rpost';
    liElement.innerHTML = `
      <article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
      </article>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn approve">Approve</button>
    `;

        // create buttons
        const editBtn = liElement.querySelector('.edit');
        const approveBtn = liElement.querySelector('.approve');
        editBtn.addEventListener('click', edit);
        approveBtn.addEventListener('click', approve);

    lists.review.appendChild(liElement);

    //clear input fields
    input.title.value = '';
    input.category.value = '';
    input.content.value = '';

    function edit() {
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;

     liElement.remove();
    }
    
    function approve() {
      lists.publish.appendChild(liElement);
      editBtn.remove();
      approveBtn.remove();
    }
  }

  function clear() {
    lists.publish.innerHTML = '';
  }
}
