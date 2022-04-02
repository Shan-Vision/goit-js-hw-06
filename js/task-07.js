const inputFontSize = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
console.dir(inputFontSize);


inputFontSize.addEventListener('input', onFontSizeChange);



function onFontSizeChange(event) {

    textSpan.style.fontSize = `${inputFontSize.value}px`;
    

}