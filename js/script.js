const calculateResult = (amount, currency) => {
    const result = amount * currency;
};

const updateResultText = (result) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = result.toFixed(2);
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    

    const amount = amountElement.value; 
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(result);
};

const init = () => {

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);

};


init();
