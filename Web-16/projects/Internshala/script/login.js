let Student = JSON.parse(localStorage.getItem("studeninfo"));
var Employe = JSON.parse(localStorage.getItem("Employeinfo"));
console.log(Student, Employe)

document.getElementById("register").addEventListener("click", function () {
    // let Student = JSON.parse(localStorage.getItem("studentinfo"))
    // let Employe = JSON.parse(localStorage.getItem("Employeinfo"))
    let email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    let conf = confirm("Your are student click OK or Cancle")
    console.log(conf)
    let flag1 = false;
    let flag = false;
    if (conf === true) {
        if (Student === null) {
            alert("⚠ Student data not found")
        } else {
            
            for (var i = 0; i < Student.length; i++) {
                if (Student[i].email == email && Student[i].password == password) {
                    flag = true;
                }
            }
        }

    } else {
        if (Employe === null) {
            alert("⚠ Employe data not found")
        } else {
           

            for (var j = 0; j < Employe.length; j++) {
                if (Employe[j].email == email && Employe[j].password == password) {
                    flag1 = true;
                }
            }
        }
    }

    if (flag == true || flag1 == true) {
        alert("Successful Login");
        window.location.href = "";
    }

    else {
        alert("Failed to login");
    }

})

document.getElementById("google").addEventListener("click", function () {
    window.location.href = " https://accounts.google.com/o/oauth2/auth/identifier?client_id=827625755886-edpmpa7jsvq8al2v03utohjqg4j2sd3b.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Finternshala.com%2Flogin%2Fgoogle&scope=profile%20email&response_type=code&state=eyAicm9sZSIgOiAidXNlciIsICJzdWNjZXNzX3BhZ2UiIDogIi9zdHVkZW50L2Rhc2hib2FyZCIsICJ1dG1fc291cmNlIiA6ICIiICwgInV0bV9tZWRpdW0iIDogIiIsICJ1dG1fY2FtcGFpZ24iIDogIiIgfQ%2C%2C&flowName=GeneralOAuthFlow"
})