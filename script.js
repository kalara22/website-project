const styleTextBox = document.querySelector("#name")

styleTextBox.addEventListener("input", () => {
    styleTextBox.classList.add("text-input")
})

const nameInput = document.querySelector("#name");
const contactForm = document.querySelector("#contact-form");
const errorMessage = document.querySelector("#name-error");

contactForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(nameInput.value === ""){
       errorMessage.textContent = "Error: Name cannot be empty";
    } else{
        console.log(`accepted: ${nameInput.value}`);
            nameInput.value = "";
    }
})

