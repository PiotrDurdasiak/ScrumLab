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
    document.querySelector(".add-plan").classList.add("display-none");
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


if (localStorage.getItem("savedName")!==null) {
    document.querySelector(".new-guest-content").classList.toggle("display-none");
    document.querySelector(".header-right-name").innerText=localStorage.getItem("savedName");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".add-plan").classList.add("display-none")
} else {
    document.querySelector(".task3-content").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".add-plan").classList.add("display-none")
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
    id:null,
    recipeTitle:"",
    recipeText:"",
    recipeIngredients:[],
    recipeInstructions:[]
};

let allRecipes=[];
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
    if (localStorage.getItem("recipes") != null) {
        let idRecipe=JSON.parse(localStorage.getItem("recipes"));
        newRecipe.id=idRecipe.length+1;
    } else {
        newRecipe.id=1;
    }

    newRecipe.recipeTitle = title.value;
    newRecipe.recipeText=opis.value;
    saveRecipeToLocalStorage(newRecipe);
    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".task3-content").classList.remove("display-none");
    location.reload();

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
    document.querySelector(".add-plan").classList.add("display-none");
})

//przycisk dodaj plan
const addPlan=document.querySelector(".addPlan");
addPlan.addEventListener("click", function () {
    document.querySelector(".add-plan").classList.remove("display-none");
    document.querySelector(".task3-content").classList.add("display-none")
})

// pole wyboru przepisu w sekcji nowy plan

const planRecipePlace=document.getElementsByClassName("recipe-select");
let recipeObject=JSON.parse(localStorage.getItem("recipes"));

for (let i=0; i<planRecipePlace.length;i++){

    for (let j=0; j<recipeObject.length; j++)
    {
        const recipeItem = document.createElement("option");
        planRecipePlace[i].appendChild(recipeItem);
        recipeItem.innerText=recipeObject[j].recipeTitle;
    }
}

// guzik zapisz i zamknij plus dodawanie nowego obiektu plan do localstorage
const addPlanBtn=document.querySelector(".plan-button");

let planTitle=document.querySelector(".plan-name-input");
let planInfo=document.querySelector(".plan-text-input");
let planNumber=document.querySelector(".plan-number-input");
let planMonday=document.getElementsByClassName("recipe-pon");
let planTuesday=document.getElementsByClassName("recipe-wt");
let planWednesday=document.getElementsByClassName("recipe-sr");
let planThursday=document.getElementsByClassName("recipe-czw");
let planFriday=document.getElementsByClassName("recipe-pia");
let planSaturday=document.getElementsByClassName("recipe-so");
let planSunday=document.getElementsByClassName("recipe-nie");





let newPlan = {
    id:null,
    title:"",
    description:"",
    weekNumber:"",
    monday:[],
    tuesday:[],
    wednesday:[],
    thursday:[],
    friday:[],
    saturday:[],
    sunday:[]
};

addPlanBtn.addEventListener("click", function(e) {
    e.preventDefault();
    newPlan.title = planTitle.value;
    newPlan.description=planInfo.value;
    newPlan.weekNumber=planNumber.value;

    for (let i=0;i<planMonday.length;i++) {
        newPlan.monday.push(planMonday[i].value);
    }

    for (let i=0;i<planTuesday.length;i++) {
        newPlan.tuesday.push(planTuesday[i].value);
    }

    for (let i=0;i<planWednesday.length;i++) {
        newPlan.wednesday.push(planWednesday[i].value);
    }

    for (let i=0;i<planThursday.length;i++) {
        newPlan.thursday.push(planThursday[i].value);
    }

    for (let i=0;i<planFriday.length;i++) {
        newPlan.friday.push(planFriday[i].value);
    }

    for (let i=0;i<planSaturday.length;i++) {
        newPlan.saturday.push(planSaturday[i].value);
    }

    for (let i=0;i<planSunday.length;i++) {
        newPlan.sunday.push(planSunday[i].value);
    }

    if (localStorage.getItem("plans") != null) {
        let idPlan=JSON.parse(localStorage.getItem("plans"));
        newPlan.id=idPlan.length+1;
    } else {
        newPlan.id=1;
    }

    savePlanToLocalStorage(newPlan);

    document.querySelector(".add-plan").classList.add("display-none");
    document.querySelector(".add-recipe").classList.add("display-none");
    document.querySelector(".task3-content").classList.remove("display-none");
    document.querySelector(".add-plan").classList.add("display-none");
    location.reload();

});

function savePlanToLocalStorage(newObject) {
    let dataFromLocalStorage = [];
    if (localStorage.getItem("plans") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("plans"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("plans", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("plans", JSON.stringify(dataFromLocalStorage));
    }
    alert("plan zapisany do localStorage");
}



// dodawanie planu do ekranu głównego

Date.prototype.getWeekNumber = function(){
   let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    let dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

let actualWeekNumber=(new Date().getWeekNumber());


const planObject = dataFromLocalStorage = JSON.parse(localStorage.getItem("plans"));



let weekNumberArray=[];
let actualPlanNumber;
for (let i=0;i<planObject.length;i++){
    weekNumberArray.push(parseFloat(planObject[i].weekNumber));
}

let closest = weekNumberArray.reduce(function(prev, curr) {
    return (Math.abs(curr - actualWeekNumber) < Math.abs(prev - actualWeekNumber) ? curr : prev);})

for (let i=0;i<planObject.length;i++){
    if (parseFloat(planObject[i].weekNumber) === closest){
        actualPlanNumber=planObject[i];
    }
}

console.log(actualPlanNumber);

document.querySelector(".table_title").innerHTML="Twój plan na "+actualPlanNumber.weekNumber+" tydzień";
 for (let i=0; i<actualPlanNumber.monday.length;i++){
     document.querySelectorAll(".poniedzialek")[i].innerHTML=actualPlanNumber.monday[i];
     document.querySelectorAll(".wtorek")[i].innerHTML=actualPlanNumber.tuesday[i];
     document.querySelectorAll(".sroda")[i].innerHTML=actualPlanNumber.wednesday[i];
     document.querySelectorAll(".czwartek")[i].innerHTML=actualPlanNumber.thursday[i];
     document.querySelectorAll(".piatek")[i].innerHTML=actualPlanNumber.friday[i];
     document.querySelectorAll(".sobota")[i].innerHTML=actualPlanNumber.saturday[i];
     document.querySelectorAll(".niedziela")[i].innerHTML=actualPlanNumber.sunday[i];
 }

 //przycisk pokazujący następny tydzień
const nextButton =document.querySelector(".under_table_bnt2");
 let actualPlan=actualPlanNumber;
 
 nextButton.addEventListener("click", function () {
     for (let i=0;i<planObject.length;i++){
         if (actualPlan.id ===planObject[planObject.length-1].id) {
             break;
         } else {
         if (planObject[i].id === actualPlan.id){
             console.log(planObject[i+1]);
             actualPlan=planObject[i+1];
             document.querySelector(".table_title").innerHTML="Twój plan na "+actualPlan.weekNumber+" tydzień";
             for (let i=0; i<actualPlanNumber.monday.length;i++){
                 document.querySelectorAll(".poniedzialek")[i].innerHTML=actualPlan.monday[i];
                 document.querySelectorAll(".wtorek")[i].innerHTML=actualPlan.tuesday[i];
                 document.querySelectorAll(".sroda")[i].innerHTML=actualPlan.wednesday[i];
                 document.querySelectorAll(".czwartek")[i].innerHTML=actualPlan.thursday[i];
                 document.querySelectorAll(".piatek")[i].innerHTML=actualPlan.friday[i];
                 document.querySelectorAll(".sobota")[i].innerHTML=actualPlan.saturday[i];
                 document.querySelectorAll(".niedziela")[i].innerHTML=actualPlan.sunday[i];
             }
             break;
         }
         }
     }
 })

//przycisk pokazujący poprzedni tydzień
const prevButton =document.querySelector(".under_table_bnt1");

prevButton.addEventListener("click", function () {
    for (let i=0;i<planObject.length;i++){
        if(actualPlan.id===1){
            break;
        } else {
        if (planObject[i].id === actualPlan.id){
            console.log(planObject[i-1]);
            actualPlan=planObject[i-1];
            document.querySelector(".table_title").innerHTML="Twój plan na "+actualPlan.weekNumber+" tydzień";
            for (let i=0; i<actualPlanNumber.monday.length;i++){
                document.querySelectorAll(".poniedzialek")[i].innerHTML=actualPlan.monday[i];
                document.querySelectorAll(".wtorek")[i].innerHTML=actualPlan.tuesday[i];
                document.querySelectorAll(".sroda")[i].innerHTML=actualPlan.wednesday[i];
                document.querySelectorAll(".czwartek")[i].innerHTML=actualPlan.thursday[i];
                document.querySelectorAll(".piatek")[i].innerHTML=actualPlan.friday[i];
                document.querySelectorAll(".sobota")[i].innerHTML=actualPlan.saturday[i];
                document.querySelectorAll(".niedziela")[i].innerHTML=actualPlan.sunday[i];
            }
            break;
        }
        }
    }
})









