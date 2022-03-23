
window.addEventListener("load", function() {
    let register_form = document.getElementById("register_form")
    
    register_form.addEventListener("submit", (event) => {
        event.preventDefault();


        const formData = new FormData(register_form);
        
        let name = formData.get("name_input")
        let email = formData.get("email_input")
        let password = formData.get("password_input")
        let username= formData.get("username_input")
        let mobile = formData.get("mobile_input")
        let description = formData.get("description_input")


        let obj = {
            name,
            email,
            password,
            username,
            mobile,
            description
        }

        let payload = JSON.stringify(obj)
        console.log(payload)

    })
})