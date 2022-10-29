const calculateResult = (amount, currency) => {
    const result = amount * currency;
};

const init = () => {

const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const amount = amountElement.value; 
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    resultElement.innerText = result.toFixed(2);


});

};

init();
