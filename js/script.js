let amountElement = document.querySelector(".js-amount")
let forexElement = document.querySelector(".js-forex")
let formElement = document.querySelector(".js-form")
let totalElement = document.querySelector(".js-total")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value; 
    let forex = forexElement.value;
    let total = amount * forex;

    totalElement.innerText = total.toFixed(2);

});