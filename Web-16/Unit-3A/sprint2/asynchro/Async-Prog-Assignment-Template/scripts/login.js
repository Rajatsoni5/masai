
let inputDetail=JSON.parse(localStorage.getItem("details"))

console.log(inputDetail[0].username)
console.log(inputDetail[0].password)

let inputarr=JSON.parse(localStorage.getItem("loginDetail"))||[];

function data(a,b){

    this.username=a;
    this.password=b;

}

function inputdata(event){

   event.preventDefault()
    
    let form=document.getElementById("login_form");
    let username=form.username.value;
    let password=form.password.value;

   let obj= new data(username,password)

    //console.log(obj)
    inputarr.push(obj)
    console.log(inputarr)

    localStorage.setItem("loginDetail",JSON.stringify(inputarr))

}

 function verifyDetail(){
     let a =0;
     let b=0;
     let c=0;

     for(var i=0;i<inputDetail.length;i++){
         for(var j=0;j<inputarr.length;j++){
             if(inputDetail[i].username===inputarr[j].username && inputDetail[i].password===inputarr[j].password ){
                 a=1;
             }
             else{
                b=1;
            }

         }
     }

     if(a===1 ){
         alert("Succesfull Login")
     }
     else if(b===1){
         alert("wrong password")
     }
     
       
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

// document.getElementById("submit").addEventListener("submit",checkdata);
// const checkdata = ()=>{

// }
    
