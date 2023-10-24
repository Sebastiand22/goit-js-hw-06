
const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
    const maxLength = parseInt(validationInput.getAttribute('data-length'), 7);
  
    if (validationInput.value.length === maxLength) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
  });

