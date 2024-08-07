
const form = document.querySelector(".feedback-form");
const LS_KEY = "feedback-form-state";

const {email, message} = form.elements

const formData = JSON.parse(localStorage.getItem(LS_KEY)) || {
    email: "",
     message: ""
}

email.value = formData.email;
message.value = formData.message;

form.addEventListener("input", onInput)

function onInput (evt) {
formData[evt.target.name] = evt.target.value.trim();


localStorage.setItem(LS_KEY, JSON.stringify(formData))
}

form.addEventListener("submit", sendForm);

function sendForm (evt) {
    evt.preventDefault();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    if (emailValue === "" || messageValue === "") {
        return alert("Fill please all fields");
    } 
    console.log(formData);
    localStorage.removeItem(LS_KEY);
    form.reset();
    formData.email = "";
    formData.message = "";
}