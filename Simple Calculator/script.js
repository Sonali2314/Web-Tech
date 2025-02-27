let resultField = document.getElementById("result");
let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  resultField.value = currentInput;
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  resultField.value = currentInput;
}

function clearResult() {
  currentInput = "";
  resultField.value = "";
}

function calculateResult() {
  try {
    currentInput = eval(currentInput);
    resultField.value = currentInput;
  } catch (error) {
    resultField.value = "Error";
    currentInput = "";
  }
}
