const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.getElementById("ingredients");

const elements = [];

for (const ingredient of ingredients) {
  const el = document.createElement("li");
  el.textContent = ingredient;
  elements.push(el);
};

ingredientsEl.append(...elements);
