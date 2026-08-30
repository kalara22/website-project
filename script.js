const styleTextBox = document.querySelector("#names-id-input")
styleTextBox.addEventListener("input", () => {
    styleTextBox.classList.add("text-input")
})

const styleTextBox2 = document.querySelector("#email-id-input");
styleTextBox.addEventListener("input", () => {
    styleTextBox.classList.add("text-input2");
}) 

const nameInput = document.querySelector("#names");
const contactForm = document.querySelector("#contact-form");
const errorMessage = document.querySelector("#name-error");

contactForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(nameInput.value.trim === ""){
       errorMessage.textContent = "Error: Name cannot be empty";
    } else{
        console.log(`accepted: ${nameInput.value}`);
            nameInput.value = "";
            errorMessage.textContent = "";
    }
})

