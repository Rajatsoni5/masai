
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
        register(payload)

    })
})

const register = (data) => {

    //we need to send the data to server (use post api method)

    fetch("https://masai-api-mocker.herokuapp.com", {

            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body : data
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err))
}