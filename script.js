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

function isValidPassword(password) {
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  return reg.test(String(password));
}

function checkPasswordsMatch() {
  if (
    passwordInput.value === "" ||
    (passwordInput.value === "" && confirmPasswordInput.value === "")
  ) {
    isFormValid = false;
    return;
  }
  if (passwordInput.value !== confirmPasswordInput.value) {
    isFormValid = false;
    invalidateEl(confirmPasswordInput);
  }
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
  if (!isValidPassword(passwordInput.value)) {
    isFormValid = false;
    invalidateEl(passwordInput);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidating = true;
  validateInputs(firstNameInput);
  validateInputs(lastNameInput);
  validateInputs(emailInput);
  validateInputs(telInput);
  validateInputs(passwordInput);
  checkPasswordsMatch();

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

passwordInput.addEventListener("input", (e) => {
  validateInputs(passwordInput);
});
