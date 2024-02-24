document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('#signup__form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const signupFormData = {
        fullname: document.querySelector('#fullname').value,
        email: document.querySelector('#email').value,
        username: document.querySelector('.username').value,
        password: document.querySelector('.password').value,
      };     

      console.log(signupFormData);
      // Här kan du vidare hantera datan, exempelvis skicka den till en server
      document.querySelector('#fullname').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('.username').value = '';
      document.querySelector('.password').value = '';
    });
});
