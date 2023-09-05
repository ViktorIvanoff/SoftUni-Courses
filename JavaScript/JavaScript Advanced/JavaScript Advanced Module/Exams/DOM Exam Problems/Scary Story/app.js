window.addEventListener("load", solve);

function solve() {
  // •	First Name, Last Name, Age, Story title and Story text are non-empty strings. If any of them is empty, the program should not do anything.

  // get input fields
  let firstNameElement = document.getElementById("first-name");
  let lastNameElement = document.getElementById("last-name");
  let ageElement = document.getElementById("age");
  let genreElement = document.getElementById('genre');
  let storyTitleElement = document.getElementById("story-title");
  let storyTextElement = document.getElementById("story");
  // get button
  let publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", onPublish);

  function onPublish(ev) {
    // validate input

    if (
      firstNameElement.value === "" ||
      lastNameElement.value === "" ||
      ageElement.value === "" ||
      storyTitleElement.value === "" ||
      storyTextElement.value === ""
    ) {
      return;
    }

    // get ul preview list
    let previewListElement = document.getElementById("preview-list");
    let storyInfoElement = document.createElement("li");
    storyInfoElement.setAttribute("class", "story-info");
    previewListElement.appendChild(storyInfoElement);

    let articleElement = document.createElement('article');
    storyInfoElement.appendChild(articleElement);

    let h4 = document.createElement('h4');
    h4.textContent += `Name: ${firstNameElement.value} ${lastNameElement.value}`;
    articleElement.appendChild(h4);

    let p = document.createElement('p');
    p.textContent += `Age: ${ageElement.value}`;
    articleElement.appendChild(p);

    let p2 = document.createElement('p');
    p2.textContent += `Title: ${storyTitleElement.value}`;
    articleElement.appendChild(p2);

    let p3 = document.createElement('p');
    p3.textContent += `Genre: ${genreElement.value}`;
    articleElement.appendChild(p3);

    let p4 = document.createElement('p');
    p4.textContent += `${storyTextElement.value}`;
    articleElement.appendChild(p4);

    // buttons
    let saveBtn = document.createElement('button');
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent += 'Save Story';
    storyInfoElement.appendChild(saveBtn);

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent += 'Edit Story';
    storyInfoElement.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent += 'Delete Story';
    storyInfoElement.appendChild(deleteBtn);

    // copy input fields in vars and clear them
    let firstNameCopy = firstNameElement.value;
    let lastNameCopy = lastNameElement.value;
    let ageCopy = ageElement.value;
    let storyTitleCopy = storyTitleElement.value;
    let storyTextCopy = storyTextElement.value;

    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
    storyTitleElement.value = "";
    storyTextElement.value = "";

    // disable publish btn and enable edit save and delete btns
    publishBtn.disabled = true;
    editBtn.disabled = false;
    saveBtn.disabled = false;
    deleteBtn.disabled = false;

    editBtn.addEventListener('click', onEdit);

    function onEdit(ev) {
      // •	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1 and all buttons in preview section are disabled while the ["Publish"] button is enabled again.

    firstNameElement.value = firstNameCopy;
    lastNameElement.value = lastNameCopy;
    ageElement.value = ageCopy;
    storyTitleElement.value = storyTitleCopy;
    storyTextElement.value = storyTextCopy;

    // disable 3 btns
    editBtn.disabled = true;
    saveBtn.disabled = true;
    deleteBtn.disabled = true;
    publishBtn.disabled = false;
    storyInfoElement.remove();
    }

    // •	When the "Save" button is clicked, the story is completed. For you, this means removing everything inside of the div with id = "main" and adding there only a <h1> tag. With message:  "Your scary story is saved!"
    saveBtn.addEventListener('click', onSave);

    function onSave(ev) {
      // select main div and remove its contents
      let mainDivElement = document.getElementById('main');
      
      function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(mainDivElement);

    // add h1 tag
    let h1 = document.createElement('h1');
    h1.textContent += 'Your scary story is saved!';
    mainDivElement.appendChild(h1);

    }

    deleteBtn.addEventListener('click', onDelete);

    function onDelete(ev) {

      storyInfoElement.remove();
      publishBtn.disabled = false;

    }
  }

}
