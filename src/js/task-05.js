const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (refs.input.value === "" || refs.input.value.trim(" ") === "") {
    return (refs.output.textContent = "незнакомец");
  }
  refs.output.textContent = refs.input.value;
}
