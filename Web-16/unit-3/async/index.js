const datas = [
    {name: "ajay", age: 24},
    {name: "rajat", age: 23}
];

function getDatas() {

    setTimeout(() => {
        let output = "";
          datas.forEach((data,index)=> {
        output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML=output
    },1000);
}

getDatas();