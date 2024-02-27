document.addEventListener('DOMContentLoaded', function () {
  // Retrieve user information from LocalStorage
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  // Display it on the corresponding elements on the page
  // Note: Adjust the element selectors according to your HTML structure.
  // For a class, use '.className', for an id, use 'elementId'
  document.querySelector('.username').textContent = username || 'Not set'; // Changed to querySelector and corrected the selector
  document.getElementById('email').textContent = email || 'Not set'; // Correct usage for id
});

function showProfileInfo() {
  const profileInfo = document.getElementById('profile-info');
  if (profileInfo) {
    profileInfo.classList.remove('opacity-0');
    profileInfo.classList.add('opacity-100');
  }
}

document.addEventListener('DOMContentLoaded', function () {
    showProfileInfo();
});
