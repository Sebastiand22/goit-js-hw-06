const loginForm = document.querySelector('.login-form');
    
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const formObject = {};
  
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  const username = document.getElementById('email');
  const password = document.getElementById('password');
  
  if (username.value === '' || password.value === '') {
    alert('Toate câmpurile trebuie completate!');
  }
  else 
  console.log(formObject);
  loginForm.reset();
});