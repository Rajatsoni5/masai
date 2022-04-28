console.log("hello")
 const div=document.getElementById("signup-form-div")

 let arr=[];

 function details(a,b,c,d,e){

    this.name=a;
    this.phone=b;
    this.email=c;
    this.username=d;
    this.password=e;

}

 function storedata(event){
     event.preventDefault()
     
     let form=document.getElementById("regist_form");
     let name=form.name.value;
     let phone=form.phone.value;
     let email=form.email.value;
     let username=form.username.value;
     let pass=form.password.value;

     let dataobj= new details(name,phone,email,username,pass)
     //console.log(dataobj)

     arr.push(dataobj)
     console.log(arr)
     localStorage.setItem("details",JSON.stringify(arr))
   
 }

 document.getElementById("btn1").onclick=()=>{
    window.location.href="index.html";
   }

   document.getElementById("btn2").onclick=()=>{
    window.location.href="login.html";
   }
   
   document.getElementById("btn3").onclick=()=>{
    window.location.href="signup.html";
   }

 