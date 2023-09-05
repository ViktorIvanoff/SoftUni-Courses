function lockedProfile() {
  //     In this problem, you should create a JS functionality that shows and hides the additional information about users.

  //     When one of the [Show more] buttons is clicked, the hidden information inside the div should
  // be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.

  // If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working!
  // Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.

  // select all buttons
  Array.from(document.querySelectorAll('.profile button')).forEach(b => 
    b.addEventListener('click', onClick));

  function onClick(e) {

    // <input type="radio" name="user1Locked" value="unlock"><br></br>
    let div = e.target.parentElement;
    let isUnlocked = div.querySelector(
      'input[type="radio"][value="unlock"]'
    ).checked;

    // we check if profile is unlocked
    if (isUnlocked) {

      let hiddenDiv = div.querySelector('div');
      // if button text is 'show more', show hidden info
      if (e.target.textContent == 'Show More') {

        //    the hidden information inside the div should be shown
        hiddenDiv.style.display = 'block';
        // we change the button text
        e.target.textContent = 'Hide it';

      } else if (e.target.textContent == 'Hide it') {

        // if button text is 'hide it', hide hidden info
        hiddenDiv.style.display = ' ';
        // we change the button text
        e.target.textContent = 'Show More';

      }
    }
  }
}
