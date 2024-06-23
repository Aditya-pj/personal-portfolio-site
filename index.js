function validate_form()
{
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let name_error = document.querySelector("#name_error");
    let email_error = document.querySelector("#email_error");
    let message_error = document.querySelector("#message_error");
    let success_message = document.querySelector("#success_message");

    let valid = true;
    name_error.innerText = "";
    email_error.innerText = "";
    message_error.innerText = "";
    success_message.innerText = "";

    if (name.length<2 || /\d/.test(name))
        {
            name_error.innerText = "Names should be more than 2 digits long and must not have digits.";
            alert("Please enter a valid name.");
            valid = false;
        }
    if (email === "" || !email.includes('@'))
        {
            email_error.innerText = "Email should not be empty and should have @";
            alert("Please enter a valid email.");
            valid = false;
        }
    if (message === "")
        {
            message_error.innerText = "Please enter a message.";
            alert("Please enter a message.");
            valid = false;
        }
    
    if (valid)
        {
            success_message.innerText = "Form submitted successfully.";
        }
    return valid;
}

function togglebar()
{
    let ham = document.querySelector("#hambutton");
    if (ham.getAttribute("class") === "menu")
        {
            ham.classList.add("show_menu");
            ham.classList.remove("menu");
        }
        else
        {
            ham.classList.add("menu");
            ham.classList.remove("show_menu");
        }
}

