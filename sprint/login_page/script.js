// Get role select element and forms
const roleSelect = document.getElementById('role');
const customerForm = document.getElementById('customer-form');
const managerForm = document.getElementById('manager-form');

// Show relevant form when role is selected
roleSelect.addEventListener('change', function () {
  customerForm.style.display = 'none';
  managerForm.style.display = 'none';

  if (roleSelect.value === 'customer') {
    customerForm.style.display = 'block';
  } else if (roleSelect.value === 'manager') {
    managerForm.style.display = 'block';
  }
});

// Customer login validation and redirect
document.getElementById('customerLoginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('customerPassword').value;

  // Username: 5–20 characters
  if (username.length < 5 || username.length > 20) {
    alert("Username must be between 5 and 20 characters.");
    return;
  }

  // Password: at least 1 uppercase, 1 lowercase, 1 special character
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
  if (!passwordPattern.test(password)) {
    alert("Password must include at least 1 uppercase, 1 lowercase, and 1 special character.");
    return;
  }

  // Save and redirect
  localStorage.setItem("username", username);
  window.location.href = "../home/customer/customer_home.html";
});

// Manager login validation and redirect
document.getElementById('managerLoginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // const email = document.getElementById('managerEmail').value.trim();
  const username = document.getElementById('managerusername').value.trim();
  const password = document.getElementById('managerPassword').value;

  // // Simple email validation
  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!emailPattern.test(email)) {
  //   alert("Please enter a valid email address.");
  //   return;
  // }

  // Username: 5–20 characters
  if (username.length < 5 || username.length > 20) {
    alert("Username must be between 5 and 20 characters.");
    return;
  }
  // Password: same validation as customer
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
  if (!passwordPattern.test(password)) {
    alert("Password must include at least 1 uppercase, 1 lowercase, and 1 special character.");
    return;
  }

  // Save and redirect
  localStorage.setItem("managerusername", username);
  window.location.href = "../home/officer/officer_home.html";
});
