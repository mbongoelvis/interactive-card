const username = document.getElementById("name");
const cardNum = document.getElementById("number");
const button = document.getElementById("submit");

//adding eventlisterners
button.addEventListener("click", function (e) {
    let user = username.value.trim()
    let card = cardNum.value.trim();
    if (user === " " && card === " ") {
        username.style.border = "1px solid red";
        cardNum.style.border = "1px solid red";
    }
});