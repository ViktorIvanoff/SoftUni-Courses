window.addEventListener("load", solve);

function solve() {
  
const input = {
  carModel: document.getElementById('car-model'),
  carYear: document.getElementById('car-year'),
  partName: document.getElementById('part-name'),
  partNumber: document.getElementById('part-number'),
  condition: document.getElementById('condition')
}

let lists = {
  infoList: document.querySelector('.info-list'),
  confirmList: document.querySelector('.confirm-list'),
  completeText: document.getElementById('complete-text'),
  completeImg: document.getElementById('complete-img')
}

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', onNext);

function onNext(event) {
  event.preventDefault();

  // read input fields
  const carModel = input.carModel.value;
  const carYear = input.carYear.value;
  const partName = input.partName.value;
  const partNumber = input.partNumber.value;
  const condition = input.condition.value;

// validate input
  if(carModel === '' || partName === '' || partNumber === '' || condition === '' ||
  carYear < 1980 || carModel > 2023) {
    return;
  }
  // move info 

  const li = document.createElement('li');
  li.className = 'part-content';
  li.innerHTML = 
  `<article>
  <p>Car Model: ${carModel}</p>
  <p>Car Year: ${carYear}</p>
  <p>Part Name: ${partName}</p>
  <p>Part Number: ${partNumber}</p>
  <p>Condition: ${condition}</p>
  </article>
  <button class="edit-btn">Edit</button>
  <button class="continue-btn">Continue</button>
  `;

  lists.infoList.appendChild(li);

  lists.completeImg.style.visibility = 'hidden';
  lists.completeText.textContent = '';

  //clear input fields
  input.carModel.value = '';
  input.carYear.value = '';
  input.partName.value = '';
  input.partNumber.value = '';
  input.condition.value = '';

  // disable nextbtn
  nextBtn.disabled = true;
  // add functionality to edit and cont btns
  const editBtn = li.querySelector('.edit-btn');
  editBtn.addEventListener('click', edit);

  const continueBtn = li.querySelector('.continue-btn');
  continueBtn.addEventListener('click', onContinue);

  function edit() {
    // populate input fields
    input.carModel.value = carModel;
    input.carYear.value = carYear;
    input.partName.value = partName;
    input.partNumber.value = partNumber;
    input.condition.value = condition;
  //remove edit and continue btns
    editBtn.remove();
    continueBtn.remove();
    lists.infoList.removeChild(li);
    //enable next btn
    nextBtn.disabled = false;
  }

  function onContinue() {
    // transfer li from infolist to confirm list
    li.remove();
    lists.confirmList.appendChild(li);

    editBtn.remove();
    continueBtn.remove();
    // add confirm and cancel btns
    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-btn';
    confirmBtn.addEventListener('click', confirm);

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.addEventListener('click', cancel);

    li.appendChild(confirmBtn);
    li.appendChild(cancelBtn);

    function confirm() {
      // remove li 
      lists.confirmList.removeChild(li);
      // enable next btn
      nextBtn.disabled = false;
      lists.completeImg.style.visibility = 'visible';
      lists.completeText.textContent += "Part is Ordered!";
    }

    function cancel() {
      lists.confirmList.removeChild(li);
      nextBtn.disabled = false;
    }
  }
}
}
