const firstNameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');
const emailInput = document.querySelector('input[name="email"]');
const telInput = document.querySelector('input[name="phoneNumber"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector(
  'input[name="confirm-password"]'
);
const ctaHeader = document.querySelector("#cta-header");
const formCompletion = document.querySelector("#form-completion");
const form = document.querySelector("#sign-up-form");

function isValidEmail(email) {
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return reg.test(String(email));
}

function isValidPhone(tel) {
  const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return reg.test(String(tel));
}

let isFormValid = false;
let isValidating = false;

function resetElement(el) {
  el.classList.remove("error");
  el.nextElementSibling.classList.add("hidden");
}

function invalidateEl(el) {
  el.classList.add("error");
  el.nextElementSibling.classList.remove("hidden");
}

function validateInputs(el) {
  if (!isValidating) return;
  isFormValid = true;
  resetElement(el);

  if (!el.value) {
    isFormValid = false;
    invalidateEl(el);
  }
  if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidateEl(emailInput);
  }
  if (!isValidPhone(telInput.value)) {
    isFormValid = false;
    invalidateEl(telInput);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidating = true;
  validateInputs(firstNameInput);
  validateInputs(lastNameInput);
  validateInputs(emailInput); // doesnt seem required because the value is passed directly into the isValidEmail function inside the validateInputs function, unsure?
  validateInputs(telInput); // doesnt seem required because the value is passed directly into the isValidPhone function inside the validateInputs function, unsure?
  if (isFormValid) {
    // do our request if the form is valid
    form.remove();
    ctaHeader.remove();
    formCompletion.classList.remove("hidden");
  }
});

firstNameInput.addEventListener("input", (e) => {
  validateInputs(firstNameInput);
});

lastNameInput.addEventListener("input", (e) => {
  validateInputs(lastNameInput);
});

emailInput.addEventListener("input", (e) => {
  validateInputs(emailInput);
});

telInput.addEventListener("input", (e) => {
  validateInputs(telInput);
});
