// Selectors
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Global variables
let isValid = false;
let passwordMatch = false;

// Validate the form
const validateForm = () => {
  // Using Contraint API.
  isValid = form.checkValidity();
  // Style main message for an error.
  if (!isValid) {
    message.textContent = 'Please fill out all fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Checking if the password's fields match.
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.color = 'red';
    password2El.style.color = 'red';
    return;
  }
  // If form is valid and password match.
  if (isValid && passwordMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
};

// Store the user's data
const storeFormData = () => {
  // Create a user object
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Locale storage the user's inputs.
  localStorage.setItem('user', JSON.stringify(user));
};

const proccessFormData = (e) => {
  e.preventDefault();
  //   Validate Form
  validateForm();
  storeFormData();
};

// Event Listeners
form.addEventListener('submit', proccessFormData);
