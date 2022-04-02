const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');


let count = 0;



incrementBtn.addEventListener('click', () => {
    count += 1;
    counterValue.textContent = count;

});	

decrementBtn.addEventListener('click', () => {
    count -= 1;
    counterValue.textContent = count;

});	

