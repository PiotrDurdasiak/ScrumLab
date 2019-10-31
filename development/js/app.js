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

    document.querySelector(".task3-content").classList.remove("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
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
    document.querySelector(".add-recipe").classList.add("display-none");
} else {
    document.querySelector(".task3-content").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
}


addName.addEventListener("click", function () {
    let userName = newName.value;
    localStorage.setItem('savedName', userName);


})


// dodawanie przepisu

//przycisk dodający elementy do listy  instrukcji

const instructionButton = document.querySelector(".add-instruction-btn");

const instructionPlace= document.querySelector(".instruction-list");



instructionButton.addEventListener("click", function () {
        const newInstruction= document.createElement("li");
        const newInstructionText =document.createElement("span");
        const removeButton = document.createElement("i");
        const editButton = document.createElement("i");

        instructionPlace.appendChild(newInstruction);
        newInstruction.appendChild(newInstructionText);
        newInstruction.appendChild(removeButton);
        newInstruction.appendChild(editButton);

        newInstructionText.innerText=document.querySelector(".add-instruction").value;
        document.querySelector(".add-instruction").value="";
        editButton.classList.add("far");
        editButton.classList.add("fa-edit");
        editButton.classList.add("edit-icon");
        removeButton.classList.add("far");
        removeButton.classList.add("fa-trash-alt");
        removeButton.classList.add("bin-icon");

        removeButton.addEventListener("click", function () {
            removeButton.parentElement.parentElement.removeChild(newInstruction);
        })

        editButton.addEventListener("click", function () {
            newInstructionText.innerText="";
            const editing=prompt("podaj nową instrukcję");
            newInstructionText.innerText=editing;
        })
})

//przycisk dodający elementy do listy


const componentsButton = document.querySelector(".add-components-btn");

const componentsPlace= document.querySelector(".components-list");



componentsButton.addEventListener("click", function () {
    const newComponent= document.createElement("li");
    const newComponentText =document.createElement("span");
    const removeButton = document.createElement("i");
    const editButton = document.createElement("i");

    componentsPlace.appendChild(newComponent);
    newComponent.appendChild(newComponentText);
    newComponent.appendChild(removeButton);
    newComponent.appendChild(editButton);

    newComponentText.innerText=document.querySelector(".add-components").value;
    document.querySelector(".add-components").value="";
    editButton.classList.add("far");
    editButton.classList.add("fa-edit");
    editButton.classList.add("edit-icon");
    removeButton.classList.add("far");
    removeButton.classList.add("fa-trash-alt");
    removeButton.classList.add("bin-icon");

    removeButton.addEventListener("click", function () {
        removeButton.parentElement.parentElement.removeChild(newComponent);
    })

    editButton.addEventListener("click", function () {
        newComponentText.innerText="";
        const editing=prompt("podaj nowy składnik");
        newComponentText.innerText=editing;
    })
})




// przycisk zapisz i zamknij


const closeSaveBtn= document.querySelector(".recipe-button");
//const instructionButton = document.querySelector(".add-instruction-btn");
// const componentsButton = document.querySelector(".add-components-btn");

let title=document.querySelector(".recipe-name").querySelector("input");
let opis=document.querySelector(".recipe-text").querySelector("textarea");
let instructions=document.querySelector(".add-instruction");
let components=document.querySelector(".add-components");

let newRecipe = {
    recipeTitle:"",
    recipeText:"",
    recipeIngredients:[],
    recipeInstructions:[]
};
// componentsButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     newRecipe.recipeIngredients.push(components.value);
//     document.querySelector(".add-components").value="";
// });
//
// instructionButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     newRecipe.recipeInstructions.push(instructions.value);
//     document.querySelector(".add-instruction").value="";
// });

closeSaveBtn.addEventListener("click", function(e) {
    e.preventDefault();

    const instList=document.querySelector(".instruction-list").getElementsByTagName("li");
    for(let i=0; i<instList.length;i++){
        newRecipe.recipeInstructions.push(instList[i].innerText);
    }

    const compList=document.querySelector(".components-list").getElementsByTagName("li");
    for(let i=0; i<compList.length;i++){
        newRecipe.recipeIngredients.push(compList[i].innerText);
    }


    newRecipe.recipeTitle = title.value;
    newRecipe.recipeText=opis.value;
    saveRecipeToLocalStorage(newRecipe);
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".task3-content").classList.remove("display-none");

});

function saveRecipeToLocalStorage(newObject) {
    let dataFromLocalStorage = [];
    if (localStorage.getItem("recipes") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
    alert("Przepis zapisany do localStorage");
}

// przycisk dodaj przepis
const addRecipe=document.querySelector(".addRecipe");
addRecipe.addEventListener("click", function () {
    document.querySelector(".add-recipe").classList.remove("display-none");
    document.querySelector(".task3-content").classList.add("display-none")
})

// przycisk pulpit

