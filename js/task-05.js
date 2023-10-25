const nameImput= document.querySelector('#name-input');
const nameOutput= document.querySelector('#name-output');

nameImput.addEventListener('input', (e) => {
    console.log(e);
    nameOutput.innerHTML=e.target.value;


})
