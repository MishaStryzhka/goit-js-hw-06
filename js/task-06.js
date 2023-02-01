const textInput = document.getElementById("validation-input");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.length !== Number(textInput.dataset.length)) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
        } else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
    }
  );
