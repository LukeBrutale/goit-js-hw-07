const refs = {
  btnDecrement: document.querySelector("[data-action='decrement']"),
  btnIncrement: document.querySelector("[data-action='increment']"),
  value: document.querySelector("#value"),
};

refs.btnDecrement.addEventListener("click", onDecrementValue);
refs.btnIncrement.addEventListener("click", onIncrementValue);

let counterValue = 0;

function onIncrementValue() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}

function onDecrementValue() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}
