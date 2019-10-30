// przyciski sidebar menu

const btn1 =document.getElementById("nav-button1");
const btn2 =document.getElementById("nav-button2");
const btn3 =document.getElementById("nav-button3");

btn1.addEventListener("click", function() {
    btn1.classList.toggle("border");
    btn1.querySelector("i").classList.toggle("arrow");
    btn2.classList.remove("border");
    btn2.querySelector("i").classList.remove("arrow");
    btn3.classList.remove("border");
    btn3.querySelector("i").classList.remove("arrow");
})

btn2.addEventListener("click", function() {
    btn2.classList.toggle("border");
    btn2.querySelector("i").classList.toggle("arrow");
    btn1.classList.remove("border");
    btn1.querySelector("i").classList.remove("arrow");
    btn3.classList.remove("border");
    btn3.querySelector("i").classList.remove("arrow");

})

btn3.addEventListener("click", function() {
    btn3.classList.toggle("border");
    btn3.querySelector("i").classList.toggle("arrow");
    btn2.classList.remove("border");
    btn2.querySelector("i").classList.remove("arrow");
    btn1.classList.remove("border");
    btn1.querySelector("i").classList.remove("arrow");

})

//dodawanie name do localstore

const newName =document.querySelector(".guest-name-input");
const addName =document.querySelector(".guest-name-add");


console.log("Masz na imię: ", localStorage.getItem("savedName"));
if (localStorage.getItem("savedName")!==null) {
    document.querySelector(".new-guest-content").classList.toggle("display-none");
    document.querySelector(".header-right-name").innerText=localStorage.getItem("savedName");
}


addName.addEventListener("click", function () {
    let userName = newName.value;
    localStorage.setItem('savedName', userName);


})


