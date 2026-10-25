const form = document.querySelector(".login-form")
form.addEventListener("submit", element => 
    {
        element.preventDefault()
        const formData = new FormData(form)
        const mail = formData.get("email");
        const pass = formData.get("password");
        const userData = {
            "email": mail.trim(),
            "password": pass.trim()
        }

    
        if (mail.trim() === `` || pass.trim() === ``) {
            alert(`All form fields must be filled in`)
            return
    }
    else{
        console.log(userData)
    }
    form.reset()
})