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

      localStorage.setItem('signupFormData', JSON.stringify(signupFormData));
      // Här kan du vidare hantera datan, exempelvis skicka den till en server
      document.querySelector('#fullname').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('.username').value = '';
      document.querySelector('.password').value = '';

      // console.log(localStorage.setItem);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const storedData = localStorage.getItem('signupFormData');
  if (storedData) {
    const formData = JSON.parse(storedData);
    document.querySelector('#fullname').value = formData.fullname;
    document.querySelector('#email').value = formData.email;
    document.querySelector('.username').value = formData.username;
    document.querySelector('.password').value = formData.password;
    console.log(formData);
  }
  
});