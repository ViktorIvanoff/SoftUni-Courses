window.addEventListener("load", solve);

function solve() {
 
    const input = {
        gemName: document.getElementById('gem-name'),
        color: document.getElementById('color'),
        carats: document.getElementById('carats'),
        price: document.getElementById('price'),
        type: document.getElementById('type')
    }

    const lists = {
        preview: document.getElementById('preview-list'),
        collection: document.getElementById('collection')
    }

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        //read input
        const gemName = input.gemName.value;
        const color = input.color.value;
        const carats = input.carats.value;
        const price = input.price.value;
        const type = input.type.value;
     // •	Gemstone Name, Color, Age, Carats, Price and Type are non-empty strings. If any of them is empty, the program should not do anything.
        if(gemName == '' || color == '' || carats == '' || price == '' || type == '') {
            return;
        }

        const li = document.createElement('li');
        li.className = 'gem-info';
        li.innerHTML = 
        `<article>
        <h4>${gemName}</h4>
        <p>Color: ${color}</p>
        <p>Carats: ${carats}</p>
        <p>Price: ${price} $</p>
        <p>Type: ${type}</p>
        </article>
        <button class="save-btn">Save to Collection</button>
        <button class="edit-btn">Edit Information</button>
        <button class="cancel-btn">Cancel</button>
        `;
        lists.preview.appendChild(li);

        input.gemName.value = ' ';
        input.color.value = ' ';
        input.carats.value = ' ';
        input.price.value = ' ';
        input.type.value = ' ';

        addBtn.disabled = true;

        const saveBtn = li.querySelector('.save-btn');
        saveBtn.addEventListener('click', save);
        
        const editBtn = li.querySelector('.edit-btn');
        editBtn.addEventListener('click', edit);

        const cancelBtn = li.querySelector('.cancel-btn');
        cancelBtn.addEventListener('click', cancel);

        //append btns to li
        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(cancelBtn);

        function edit() {
            // put back input fields
        input.gemName.value = gemName;
        input.color.value = color;
        input.carats.value = carats;
        input.price.value = price;
        input.type.value = type;

        //remove btns
        saveBtn.remove();
        editBtn.remove();
        cancelBtn.remove();

        // enable addgem btn
        addBtn.disabled = false;
        
        //remove li
        lists.preview.removeChild(li);
        }

        function save() {
           //create new li
           const previewLi = document.createElement('li');
           previewLi.className = 'collection-item';
           previewLi.innerHTML = 
           `<p class="collection-item">${gemName} - Color: ${color}/
           Carats: ${carats}/ Price: ${price}$/ Type: ${type}</p>`;

           lists.collection.appendChild(previewLi);
           lists.preview.removeChild(li);
           addBtn.disabled = false;
        }

        function cancel() {
            //remove li from preview list 
            lists.preview.removeChild(li);
            addBtn.disabled = false;
        }
    }
}
