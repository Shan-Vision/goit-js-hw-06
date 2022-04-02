function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  colorBtn: document.querySelector(".change-color"),
  name: document.querySelector(".color"),
  body: document.body,
}
refs.colorBtn.addEventListener("click", onChangeBtn);

console.log(refs.name.textContent);

function onChangeBtn(event) {

  refs.name.textContent = getRandomHexColor();
  
  refs.body.style.backgroundColor = refs.name.textContent;
  
 

  
}