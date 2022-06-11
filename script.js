let currentNumberLabel = document.getElementById("currentNumberLabel");
currentNumberLabel.value = 0;
let operationLabel = document.getElementById("operationLabel");
operationLabel.value = "";
let operatorClickCheck;
let rectangleChange;
let lhs = "0";
let rhs = "0";
let currentPercentage = 0;

function changeTextBox(e) {
    let b = document.getElementById(e)
    if (currentNumberLabel.value.charAt(0) == '0' && !currentNumberLabel.value.includes(".") || operatorClickCheck && currentPercentage == 0) {
        currentNumberLabel.value = b.value;
        operatorClickCheck = false;
    }
    else if(containsOperator(operationLabel.value) && operationLabel.value.includes("=")) {
        operationLabel.value = "";
        currentNumberLabel.value = b.value;
    }
    else if(currentPercentage != 0) {
        let index = operatorIndex(operationLabel.value);
        operationLabel.value = (operationLabel.value.substring(0, index + 1));
        currentNumberLabel.value = b.value;
    }
    else {
        currentNumberLabel.value = (currentNumberLabel.value + b.value);
    }
    rectangleChange = false;
}


function changeOperationTextBox(e) {
    try {
        let b = document.getElementById(e)
        if (!containsOperator(operationLabel.value) || operationLabel.value.includes("=")) {
            operationLabel.value = (currentNumberLabel.value + " " + b.value);
        } else if (rectangleChange) {
            let index = operatorIndex(operationLabel.value);
            let operationText = operationLabel.value;
            operationLabel.value = (operationText.replace(operationText.charAt(index), b.value.charAt(0)));
        } else {
            let index = operatorIndex(operationLabel.value);
            lhs = operationLabel.value.substring(0, index - 1);
            rhs = currentNumberLabel.value;
            let operator = getOperator(operationLabel.value);
            let result = new Expression(lhs, rhs, operator).eval();
            if (checkLong(result)) {
                currentNumberLabel.value = (Number(result).toString());
            } else {
                currentNumberLabel.value = (parseFloat(result).toString());
            }
            operationLabel.value = (currentNumberLabel.value + " " + b.value);
        }
        rectangleChange = true;
        operatorClickCheck = true;
    }
    catch(exception) {
        alert(exception);
        currentNumberLabel.value = 0;
        operationLabel.value = "";
    }
}
function calculateExpression() {
    try {
        if(containsOperator(operationLabel.value)) {
            let operator = getOperator(operationLabel.value);
            let index = operatorIndex(operationLabel.value);
            if(!operationLabel.value.includes("=")) {
                lhs = operationLabel.value.substring(0, index - 1);
                rhs = currentNumberLabel.value;
            }
            else {
                lhs = currentNumberLabel.value;
                rhs = operationLabel.value.substring(index + 2);
            }
            if (rhs.includes("=")) {
                rhs = rhs.substring(0, operatorIndex(rhs) - 1);
            }
            let result = new Expression(lhs, rhs, operator).eval();
            if (checkLong(result)) {
                currentNumberLabel.value = (Number(result).toString());
            } else {
                currentNumberLabel.value = (parseFloat(result).toString());
            }
            operationLabel.value = (lhs + " " + operator + " " + rhs + " =");
        }
        else {
            operationLabel.value = (currentNumberLabel.value + " =");
            operatorClickCheck = true;
        }
    } catch (e) {
        currentNumberLabel.value = "";
        let a = alert(e);
        currentNumberLabel.value = 0;
        operationLabel = "";
    }
}
function clearLog() {
    rectangleChange = false;
    currentNumberLabel.value = "0";
    operationLabel.value = "";
    currentPercentage = 0;
}
function percentButton() {
    if(operationLabel.value.includes("=")) {
        currentPercentage = parseFloat(currentNumberLabel.value);
        const toBeUpdated = (parseFloat(currentNumberLabel.value) / 100) * currentPercentage;
        if (checkLong(toBeUpdated)) {
            currentNumberLabel.value = (Number(toBeUpdated).toString());
        } else {
            currentNumberLabel.value = (parseFloat(toBeUpdated).toString());
        }
        operationLabel.value = (currentNumberLabel.value);
    }
    else if(operationLabel.value == (currentNumberLabel.value)) {
        const toBeUpdated = (parseFloat(currentNumberLabel.value) / 100) * currentPercentage;
        if (checkLong(toBeUpdated)) {
            currentNumberLabel.value = (Number(toBeUpdated).toString());
        } else {
            currentNumberLabel.value = (parseFloat(toBeUpdated).toString());
        }
        operationLabel.value = (currentNumberLabel.value);
    }
    else if(containsOperator(operationLabel.value)) {
        currentPercentage = parseFloat(currentNumberLabel.value);
        const index = operatorIndex(operationLabel.value);
        const toBeUpdated = (parseFloat(operationLabel.value.substring(0, index)) / 100) * currentPercentage;
        if (checkLong(toBeUpdated)) {
            operationLabel.value = (operationLabel.value.substring(0, index + 1));
            operationLabel.value = (operationLabel.value + " " + toBeUpdated);
            currentNumberLabel.value = (Number(toBeUpdated).toString());
        } else {
            operationLabel.value = (operationLabel.value.substring(0, index + 1));
            operationLabel.value = (operationLabel.value + " " + toBeUpdated);
            currentNumberLabel.value = (parseFloat(toBeUpdated).toString());
        }
    }
    else {
        currentNumberLabel.value = "0";
        operationLabel.value = "0";
    }
    rectangleChange = true;
}
function clearEntry() {
    operatorClickCheck = false;
    currentNumberLabel.value = "0";
    if(operationLabel.value.includes("=")) {
        operationLabel.value = "";
    }
    else if(containsOperator(operationLabel.value)) {
        const index = operatorIndex(operationLabel.value);
        operationLabel.value = (operationLabel.value.substring(0, index + 1));
        currentPercentage = 0;
    }
}
function negate() {
    const currentNumber = parseFloat(currentNumberLabel.value);
    if (checkLong(currentNumber)) {
        currentNumberLabel.value = (Number(currentNumber * -1).toString());
    }
    else {
        currentNumberLabel.value = (parseFloat(currentNumber * - 1).toString());
    }
    rectangleChange = false;
}
function square() {
    const currentNumber = parseFloat(currentNumberLabel.value);
    if (checkLong(currentNumber)) {
        currentNumberLabel.value = (Number(currentNumber) * Number(currentNumber).toString());
    }
    else {
        currentNumberLabel.value = (parseFloat(currentNumber * currentNumber).toString());
    }
    if(!containsOperator(operationLabel.value) || operationLabel.value.includes("=")) {
        operationLabel.value = "";
    }
    lhs = currentNumberLabel.value;
    checkInvalidNumber(currentNumberLabel.value);
    operatorClickCheck = true;
    rectangleChange = false;
}    
function invertFraction() {
    const currentNumber = parseFloat(currentNumberLabel.value);
    const result =  1 / currentNumber;
    if(currentNumberLabel.value == ("0")) {
        currentNumberLabel.value = "";
        operationLabel.value = "";
        a = alert("CANNOT DIVIDE BY ZERO");
        clearLog();
        return;
    }
    currentNumberLabel.value = (parseFloat(1 / currentNumber));
    if (result % 1 == 0 && !parseFloat(result).toString().includes("e")) {
        currentNumberLabel.value = (Number(result).toString());
    } else {
        currentNumberLabel.value = (parseFloat(result).toString());
    }
    if(!containsOperator(operationLabel.value) || operationLabel.value.includes("=")) {
        operationLabel.value = "";
    }
    lhs = currentNumberLabel.value;
    operatorClickCheck = true;
    rectangleChange = false;
}
function squareRoot() {
    const currentNumber = parseFloat(currentNumberLabel.value);
    const result =  Math.sqrt(currentNumber);
    currentNumberLabel.value = (parseFloat(1 / currentNumber).toString());
    if (checkLong(result)) {
        currentNumberLabel.value = (Number(result).toString());
    } else {
        currentNumberLabel.value = (parseFloat(result).toString());
    }
    checkInvalidNumber(currentNumberLabel.value);
    if(!containsOperator(operationLabel.value) || operationLabel.value.includes("=")) {
        operationLabel.value = "";
    }
    lhs = currentNumberLabel.value;
    operatorClickCheck = true;
    rectangleChange = false;
}
function backspace() {
    if(operationLabel.value.includes("=")) {
        operationLabel.value = "";
        operatorClickCheck = true;
    }
    else if(!operatorClickCheck) {
        if(currentNumberLabel.value.length == 1) {
            currentNumberLabel.value = "0";
        }
        else {
            currentNumberLabel.value = (currentNumberLabel.value.substring(0, currentNumberLabel.value.length - 1));
        }
    }
}
function addComma() {
    if (operationLabel.value.includes("=") || rectangleChange) {
        clearEntry();
    }
    if (!currentNumberLabel.value.includes(".")) {
        currentNumberLabel.value = (currentNumberLabel.value + ".");
    }
}
function checkInvalidNumber(string) {
    message = "";
    if(string == ("Infinity")) {
        message = "OVERFLOW";
    }
    else if(string == ("NaN")) {
        message = "CANNOT TAKE THE SQUARE ROOT OF A NEGATIVE NUMBER";
    }
    if(!!message) {
        currentNumberLabel.value = "";
        operationLabel.value = "";
        a = alert(message);
        clearLog();
    }
}