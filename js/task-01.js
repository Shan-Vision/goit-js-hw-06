const listWithId = document.querySelector('#categories');
const categoriesOfList = listWithId.children;
console.log(`Numbers of categories: ${categoriesOfList.length}`);


const itemClassEl = document.querySelectorAll('.item');

itemClassEl.forEach(function (el, index, array) {
    const itemTitle = el.firstElementChild;
    console.log(`Categories: ${itemTitle.textContent}`);
    const elementsList = el.lastElementChild;
    const countOfElements = elementsList.children.length;
    console.log(`Elements: ${countOfElements}`);