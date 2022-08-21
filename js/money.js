
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputAmount = parseFloat(inputValueString);
    inputField.value = '';

    return inputAmount;
}
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function setElementText(textId, textValue) {
    const elementText = document.getElementById(textId);
    elementText.innerText = textValue;
}
function inputValidation(inputId) {
    const inputFields = document.getElementsById(inputId);
    for (const inputField of inputFields) {
        const inputValue = inputField.value;
        if (isNaN(inputValue)) {
            alert('input numbers only');
            return;
        }
        else if (inputValue < 0) {
            alert('invalid input');
            return;
        }
        else if (inputValue === '') {
            alert('input field can not be empty');
            return;
        }
    }
}




document.getElementById('btn-calculate').addEventListener('click', function () {


    const income = getInputValue('income-input-field');


    const foodCost = getInputValue('food-cost');

    const rentCost = getInputValue('rent-cost');

    const clothsCost = getInputValue('cloths-cost');


    const totalExpenses = foodCost + rentCost + clothsCost;

    const balance = income - totalExpenses;



    if (balance < 0) {
        alert('your expenses can not be more than your income');
        return;
    }



    setElementText('total-expenses', totalExpenses);
    setElementText('balance', balance);

})

document.getElementById('btn-save').addEventListener('click', function () {
    const savingsRate = getInputValue('savings');
    if (isNaN(savingsRate) || savingsRate === '' || savingsRate < 0) {
        alert('invalid input');
        return;
    }
    else if (savingsRate > 100) {
        alert('you can not save more than your balance');
        return;
    }
    const currentBalance = getElementValue('balance');


    const savings = currentBalance * (savingsRate / 100);
    const remainingBalance = currentBalance - savings;

    setElementText('saving-Amount', savings);
    setElementText('remaining-balance', remainingBalance);


})