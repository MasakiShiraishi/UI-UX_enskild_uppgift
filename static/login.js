document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('#login__form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const loginFormData = {
        username: document.querySelector('.username').value,
        password: document.querySelector('.password').value,
      };

      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // LocalStorageにユーザー情報を保存
          localStorage.setItem('username', data.user.username);
          localStorage.setItem('email', data.user.email);
  
          // プロフィールページにリダイレクト
          window.location.href = '/profile';
        } else {
          alert('ログインに失敗しました。');
        }
      })
      .catch(error => {
        console.error('ログインエラー:', error);
      });
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

      // Redirect to the specified URL after hiding the form and overlay
      window.location.href = 'http://localhost:5080/';
    };

    // Add event listeners for the end of the animations
    loginFormContainer.addEventListener('animationend', onAnimationEnd);
    overlay.addEventListener('animationend', onAnimationEnd);
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Existing code for handling form submission and other interactions
  
    // Listen for clicks on the "Skapa konto" button
    document.getElementById('createAccountBtn').addEventListener('click', function () {
      // Redirect to the /signup page
      window.location.href = '/signup';
    });
  });
