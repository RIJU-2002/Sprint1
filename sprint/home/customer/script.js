// Example: Dynamically change the username (if set in local storage)
document.addEventListener('DOMContentLoaded', function () {
  const usernameElement = document.getElementById('username');
  const storedUsername = localStorage.getItem('username'); // Or fetch from server
  
  if (storedUsername) {
    usernameElement.textContent = storedUsername;
  }
});
