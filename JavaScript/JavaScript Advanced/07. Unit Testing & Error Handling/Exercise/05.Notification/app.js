function notify(message) {
  // Write a JS function that receives a string message and displays it inside a div with id "notification. The div starts hidden and when the function is called, reveal it. After the user clicks on it, hide the div. In the example document, a notification is shown when you click on the button ["Get notified"].

  let notificationElement = document.getElementById('notification');
  let p = document.createElement('p');
  p.textContent += message;

  notificationElement.appendChild(p);
  notificationElement.style.display = 'block';

  // add eventlistener on div
  notificationElement.addEventListener('click', () => {
    notificationElement.style.display = 'none';
  });
  
}