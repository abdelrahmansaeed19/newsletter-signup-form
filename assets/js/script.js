const dialog = document.getElementById("signup-success-dialog");
const dismissbtn = document.getElementById("dismiss-button");
const form = document.getElementById("signup-form");
const emailInputArea = document.getElementById("email");
const successEmail = document.getElementById("user-email");
const errorMessage = document.getElementById("error-message");
const submitbtn = document.getElementById("newsletter-button");

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function isValidEmail(value) {
  return value.length <= 254 && EMAIL_RE.test(value);
}

function toggleInvalidState() {
  emailInputArea.classList.toggle("invalid-email-state");
  errorMessage.classList.toggle("visible");
}

function validateEmail() {
  const email = emailInputArea.value.trim();
  const isValid = isValidEmail(email);

  if (!isValid && !emailInputArea.classList.contains("invalid-email-state"))
    toggleInvalidState();

  if (isValid && emailInputArea.classList.contains("invalid-email-state"))
    toggleInvalidState();
  return isValid;
}

emailInputArea.addEventListener("blur", () => {
  if (emailInputArea.value.trim() !== "") validateEmail();
});

emailInputArea.addEventListener("input", () => {
  if (emailInputArea.classList.contains("invalid-email-state")) validateEmail();
});

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validateEmail()) return;

  successEmail.textContent = emailInputArea.value.trim();

  dialog.showModal();
});

dialog.addEventListener("close", () => {
  form.reset();
});
