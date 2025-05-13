const form = document.getElementById('registrationForm');

const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneInput = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', function (e) {
  let hasError = false;

  // Clear previous errors
  usernameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  // Username validation
  if (username.value.length < 5 || username.value.length > 30) {
    usernameError.textContent = "Username must be between 5 and 30 characters.";
    hasError = true;
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Please enter a valid email address.";
    hasError = true;
  }

  // Phone number validation
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    hasError = true;
  }

  // Password validation
  const pwd = password.value;
  passwordError.textContent = "";

  // Length check
  if (pwd.length > 30) {
    passwordError.textContent = "Password must be less than 30 characters.";
    hasError = true;
  } else {
    // Complexity check
    const complexityPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
    if (!complexityPattern.test(pwd)) {
      passwordError.textContent = "Password must include at least one uppercase letter, one lowercase letter, and one special character.";
      hasError = true;
    }
  }

  // Confirm password validation
  if (pwd !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    hasError = true;
  }

  // Prevent form submission if there are errors
  if (hasError) {
    e.preventDefault();
  }
});

// Reset error messages on form reset
form.addEventListener('reset', function () {
  usernameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
});
