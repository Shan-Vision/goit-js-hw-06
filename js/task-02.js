const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newIngredient = ingredients.map(element => {
  const productItem = document.createElement('li');
  productItem.textContent = `${element}`;
  productItem.classList.add('item');

  return productItem;
});

const listItems = document.querySelector('#ingredients');
listItems.append(...newIngredient);
console.log(listItems);
