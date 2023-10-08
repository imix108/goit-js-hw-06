
const categoriesList = document.querySelector("#categories");


const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2");
  
  const categoryListItems = categoryItem.querySelectorAll("ul li");
  
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryListItems.length}`);
});