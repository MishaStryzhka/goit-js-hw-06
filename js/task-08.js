const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    console.log(event.currentTarget.elements[0].name)
    if (event.currentTarget.elements[0].value === "" || event.currentTarget.elements[1].value === "") {
        alert("Заповніть всі поля");
    };

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.email.value;

    console.log({mail, password});

    form.reset()
}