function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector("#boxes");
const controlBtn = document.querySelector("#controls");
const input = controlBtn.children[0];
const createBtn = controlBtn.children[1];
const destroyBtn = controlBtn.children[2];


createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", onDestroyBtn)


function onCreateBtn(event) {
 
  createBoxes();
 
};


function onDestroyBtn(event) {
  boxContainer.innerHTML = "";
  input.value = "";
};

// let size = 30;


const createBoxes = function(amount) {
  amount = Number(input.value);
  const boxArray = [];
  let size = 30;

  for (let i = 0; i < amount; i+=1) {
    let box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxArray.push(box);

  };
  boxContainer.append(...boxArray);

};

