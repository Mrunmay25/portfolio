let cvbtn = document.getElementById("cvbtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");

cvbtn.addEventListener("click",function(){
    alert("Download Succesfully")
})

submit.addEventListener("click",function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value ==""){
        alert("Fill Details")
    }else{
        alert("Logged In")
    }
})

let ul = document.querySelector("ul");
bar.addEventListener("click",function(){
    ul.classList.toggle("showdata");

    if(ul.className == "showdata"){
        bar.className="fa-solid fa-xmark"
    }
    else{
        bar.className="fa-solid fa-bars"
    }
})