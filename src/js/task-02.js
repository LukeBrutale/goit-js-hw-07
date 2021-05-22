const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// const element = ingredients.map(title => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = title;

//   return itemEl;
// });

// const navEl = document.querySelector("#ingredients");
// navEl.append(...element);

const makeIngredients = options => {
  return options.map(title => {
    const itemEl = document.createElement("li");
    itemEl.textContent = title;

    return itemEl;
  });
};

const elements = makeIngredients(ingredients);
const navEl = document.querySelector("#ingredients");
navEl.append(...elements);
