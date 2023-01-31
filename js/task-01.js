const cetegories = document.getElementById("categories");

console.log(`Number of categories: ${cetegories.children.length}`);

for (const categori of categories.children) {
    console.log(`Category: ${categori.firstElementChild.textContent}`);
    console.log(`Elements: ${categori.lastElementChild.children.length}`);
};
