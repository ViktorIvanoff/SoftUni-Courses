function solve() {
  // You will be given some furniture as an array of objects. Each object will have a name, a price, and a decoration factor. 

  // When the ["Generate"] button is clicked, add a new row to the table for each piece of furniture with image, name, price, and decoration factor (code example below). 

  // When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result textbox the names of the piece of furniture that were checked, separated by a comma and single space (", ") in the following format: "Bought furniture: {furniture1}, {furniture2}…".

  // On the next line, print the total price in the format: "Total price: {totalPrice}" (formatted to the second decimal point). Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"
  
  // select all buttons
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  // add event listeners
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(e) {

  let input = document.querySelectorAll('textarea')[0].value;

  let array = JSON.parse(input);

  for (let object of array) {
//     <tbody>

//     <tr>
//         <td>
//             <img
//                 src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
//         </td>

//         <td>
//             <p>Office chair</p>
//         </td>

//         <td>
//             <p>160</p>
//         </td>
//         <td>
//             <p>0.5</p>
//         </td>

//         <td>
//             <input type="checkbox" disabled />
//         </td>

//     </tr>

// </tbody>

    // img
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let img = document.createElement('img');
    img.src = object.img;
    td.appendChild(img);
    tr.appendChild(td);

    // name
    let td2 = document.createElement('td');
    let p = document.createElement('p');
    p.textContent = object.name;
    td2.appendChild(p);
    tr.appendChild(td2);

    //price
    let td3 = document.createElement('td');
    let p2 = document.createElement('p');
    p2.textContent = Number(object.price);
    td3.appendChild(p2);
    tr.appendChild(td3);

    //decorationFactor
    let td4 = document.createElement('td');
    let p3 = document.createElement('p');
    p3.textContent = Number(object.decFactor);
    td4.appendChild(p3);
    tr.appendChild(td4);

    //input
    let td5 = document.createElement('td');
    let input = document.createElement('input');
    input.type = 'checkbox';
    td5.appendChild(input);
    tr.appendChild(td5);

     // attach tr to tbody
    document.querySelector('tbody').appendChild(tr);
  }

  }

  function buy(e) {
    // get all checkboxes that are marked
    let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter( c => c.checked);

    let boughtFurniture = [];
    let price = 0;
    let decFactor = 0;

      for (let box of checkboxes) {

        let furniture = box.parentElement.parentElement;
        // take name and push it into array
        boughtFurniture.push(furniture.querySelectorAll('p')[0].textContent);
        // calc price
        price += Number(furniture.querySelectorAll('p')[1].textContent);
        // calc decFactor
        decFactor += Number(furniture.querySelectorAll('p')[2].textContent);

      }

      // calc average decFactor
      let avgDecFactor = decFactor / checkboxes.length;

      // display output
      let output = document.querySelectorAll('textarea')[1];
      output.value += `Bought furniture: ${boughtFurniture.join(', ')}\r\n`;
      output.value += `Total price: ${price.toFixed(2)}\r\n`;
      output.value += `Average decoration factor: ${avgDecFactor}`;
  }

}