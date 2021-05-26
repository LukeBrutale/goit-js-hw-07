const inputEl = document.querySelector("#validation-input");

const lengthAttribute = +inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInputBlur);
function onInputBlur() {
  if (inputEl.value.length !== lengthAttribute) {
    inputEl.classList.contains("valid")
      ? inputEl.classList.replace("valid", "invalid")
      : inputEl.classList.add("invalid");
  } else {
    inputEl.classList.contains("invalid")
      ? inputEl.classList.replace("invalid", "valid")
      : inputEl.classList.add("valid");
  }
}
