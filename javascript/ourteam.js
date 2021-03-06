function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';} 

    // the event handler for the click event of each h2 element
const toggle = (evt) => {
    console.log(evt);
    const h2Element = evt.currentTarget; // get the clicked h2 element
    const divElement = h2Element.nextElementSibling; // get h2's sibling
  
    h2Element.classList.toggle('minus');
    divElement.classList.toggle('open');
  
    evt.preventDefault(); // cancel default action of h2 tag's <a> tag
  }


  // when window loads, track submit button's click action
window.onload = function () {
  // when submit button clicked, run form validation function
  document.getElementById('submit').onclick = validateForm;
};

// function to validate name input
function validateName() {
  let name = document.querySelector('#subname');
  let pattern = /^[a-zA-Z ]{1,30}$/;
  // if no input for name
  if (name.value == '') {
      // show a reminder to user
      name.nextElementSibling.innerHTML = '<br>Please enter your name';
  // if pattern doesn't match
  } else if (!pattern.test(name.value)) {
      // show a reminder to user
      name.nextElementSibling.innerHTML = '<br>Please enter letters only';
  } else {
      name.nextElementSibling.innerHTML = '';
  }
}

// function to validate email input
function validateEmail() {
  let email = document.querySelector('#subemail');
  let pattern = /\S+@\S+\.\S+/
  // if no input for email
  if (email.value == '') {
      // show a reminder to user
      email.nextElementSibling.innerHTML = '<br>Please enter your email';
  // if pattern doesn't match
  } else if (!pattern.test(email.value)) {
      // show a reminder to user
      email.nextElementSibling.innerHTML = '<br>Please enter a valid email';
  } else {
      email.nextElementSibling.innerHTML = '';
  }
}

// combine validation function for name and email into one function
function validateForm() {
  validateName();
  validateEmail();
}


  