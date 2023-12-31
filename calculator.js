let result = document.getElementById("result");

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function clearResult() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function calculateSqrt() {
    try {
        const value = eval(result.value);
        if (value >= 0) {
            result.value = Math.sqrt(value);
        } else {
            result.value = "Error";
        }
    } catch (error) {
        result.value = "Error";
    }
}
