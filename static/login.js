document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('#login-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const loginFormData = {
        username: document.querySelector('.username').value,
        password: document.querySelector('.password').value,
      };
      console.log(loginFormData);
      // Här kan du vidare hantera datan, exempelvis skicka den till en server
    });
});

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('showLoginFormBtn')
    .addEventListener('click', function () {
      const loginFormContainer = document.getElementById('loginFormContainer');
      const overlay = document.getElementById('overlay');
      loginFormContainer.style.display = 'block';
      overlay.style.display = 'block';
      loginFormContainer.style.animation = 'none';
      overlay.style.animation = 'none';

      void loginFormContainer.offsetWidth;
      void overlay.offsetWidth;

      loginFormContainer.style.animation = 'slideDown 0.5s ease-out forwards';
      overlay.style.animation = 'fadeIn 0.5s ease-out forwards';
    });
});

document
  .getElementById('closeLoginFormBtn')
  .addEventListener('click', function () {
    const loginFormContainer = document.getElementById('loginFormContainer');
    const overlay = document.getElementById('overlay');

    // Apply the animations
    loginFormContainer.style.animation = 'slideUp 0.5s ease-out forwards';
    overlay.style.animation = 'fadeOut 0.5s ease-out forwards';

    // Function to hide the elements after animation ends
    const onAnimationEnd = () => {
      loginFormContainer.style.display = 'none';
      overlay.style.display = 'none';
      // Remove event listeners to prevent memory leaks
      loginFormContainer.removeEventListener('animationend', onAnimationEnd);
      overlay.removeEventListener('animationend', onAnimationEnd);
    };

    // Add event listeners for the end of the animations
    loginFormContainer.addEventListener('animationend', onAnimationEnd);
    overlay.addEventListener('animationend', onAnimationEnd);
  });
