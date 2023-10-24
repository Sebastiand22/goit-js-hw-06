const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const containerEl = document.querySelector("#ingredients");
console.dir(containerEl);
const listEl = document.createElement("li");
containerEl.append(listEl);

// const firstElFromList= document.createElement('li');
// firstElFromList.innerText=ingredients[0];
// listEl.append(firstElFromList);

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li"); //<li></li>
  li.innerText = ingredients[i];
  listEl.append(li);
}
