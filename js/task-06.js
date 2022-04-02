const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', onInputValue);

function onInputValue(event) {
    const typingTextNumber = Number(event.currentTarget.value.length);
    const availableTextNumber = Number(event.currentTarget.dataset.length);
    inputValue.classList.add('invalid');
    
    if (typingTextNumber >= availableTextNumber) {
        
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');        

    } 
    
};