const selectorId = document.querySelector("#categories");
const titleEl = selectorId.children;

const amountCategories = object => {
  console.log(`В списке ${object.children.length} категории`);
};

const descriptionCategories = object => {
  for (const iterator of object) {
    console.log(`Категория: ${iterator.firstElementChild.textContent}`);

    console.log(
      `Количество элементов: ${iterator.lastElementChild.children.length}`
    );
  }
};

amountCategories(selectorId);

descriptionCategories(titleEl);
