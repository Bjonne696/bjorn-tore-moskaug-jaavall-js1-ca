const submit = document.querySelector('#submit');
const firstNameError = document.querySelector('.firstNameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const addressError = document.querySelector('.addressError');

submit.onclick = function (event) {
  event.preventDefault();

  const firstName = document.querySelector('#firstname').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const email = document.querySelector('#email').value.trim();
  const address = document.querySelector('#address').value.trim();

  if (firstName.length > 0) {
    firstNameError.classList.add('hide');
    firstNameError.classList.remove('show');
  } else {
    firstNameError.classList.add('show');
    firstNameError.classList.remove('hide');
  }

  if (subject.length >= 10) {
    subjectError.classList.add('hide');
    subjectError.classList.remove('show');
  } else {
    subjectError.classList.add('show');
    subjectError.classList.remove('hide');
  }

  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailError.classList.remove('show');
  } else {
    emailError.classList.add('show');
    emailError.classList.remove('hide');
  }

  if (address.length > 25) {
    addressError.classList.add('hide');
    addressError.classList.remove('show');
  } else {
    addressError.classList.add('show');
    addressError.classList.remove('hide');
  }
};

function validateEmail(emailAddress) {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddress);
  return isEmailValid;
}