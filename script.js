let cardNumberInput = document.querySelector("#number");
let submitButton = document.querySelector(".submit");
let Name = document.querySelector("#name");
let cvc = document.querySelector("#cvc");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let main = document.querySelector("#main");
let expression = /[a-zA-Z]/
   
 submitButton.addEventListener("click", function (event) {
     Name.addEventListener("change", function () { })
     cvc.addEventListener("change", function () { })
     year.addEventListener("change", function () { })
     month.addEventListener("change", function () { })
//event for the name input
    if (Name.value.length < 1 ) {
        Name.style.border = "1px solid red";
        event.preventDefault();
    } else {
        Name.style.border = "1px solid hsl(270, 3%, 87%)"; // reset border if valid
        event.preventDefault();
    }
//event for the card number number
    if (cardNumberInput.value.length < 16 || isNaN(parseFloat(cardNumberInput.value)) || expression.test(cardNumberInput.value)) {
        cardNumberInput.style.border = "1px solid red";
        event.preventDefault();
    } else {
        cardNumberInput.style.border = ""; // reset border if valid
        event.preventDefault();
    }
//event for the cvc number
    if (cvc.value.length < 4 || cvc.value.length > 4){
        cvc.style.border = "1px solid red";
        event.preventDefault(); 
    }
    else{
        cvc.style.border = "1px solid hsl(270, 3%, 87%)"; 
    }
//event for year and month
    if (month.value.length > 3 || month.value.length < 1){
        month.style.border = "1px solid red"; 
    }
    else{
        month.style.border = "1px solid hsl(270, 3%, 87%)"; 
    }
     if (year.value.length > 4 || year.value.length < 2){
         year.style.border = "1px solid red"; 
     }
     else {
         year.style.border = "1px solid hsl(270, 3%, 87%)";
     }
     main.classList.add("disappear")

 });