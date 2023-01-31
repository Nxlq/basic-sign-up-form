const firstNameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');
const emailInput = document.querySelector('input[name="email"]');
const telInput = document.querySelector('input[name="phoneNumber"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector(
  'input[name="confirm-password"]'
);
const form = document.querySelector("#sign-up-form");

function validateInputs(el) {
  if (!el.value) {
    el.classList.add("error");
    el.nextElementSibling.classList.remove("hidden");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs(firstNameInput);
  validateInputs(lastNameInput);
  validateInputs(emailInput);
  validateInputs(telInput);
});
