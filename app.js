/*-------------------------------- Constants --------------------------------*/
const SELECTORS = {
  calculator: '#calculator',
  button: '.button',
  number: '.number',
  operator: '.operator',
  equals: '.equals',
  clear: '.clear'
};
const OPERATORS = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/'
};
/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator = '';
let previousInput = '';
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector(SELECTORS.calculator);
/*----------------------------- Event Listeners -----------------------------*/
 // Event delegation: add an event listener to the calculator element
 calculator.addEventListener('click', (event) => {

  console.log(event.target.innerText);
  if (!event.target.classList.contains(SELECTORS.button.slice(1))) {
    return;
  }
  if (event.target.classList.contains(SELECTORS.number.slice(1))) {
    handleNumber(event.target.innerText);
  }
  if (event.target.classList.contains(SELECTORS.operator.slice(1))) {
    handleOperator(event.target.innerText);
  }
  if (event.target.classList.contains(SELECTORS.equals.slice(1))) {
    calculateResult();
  }
  if (event.target.classList.contains(SELECTORS.clear.slice(1))) {
    clearCalculator();
  }
});
/*-------------------------------- Functions --------------------------------*/
// button(number) to function(operator) to button(number) = result
// press a number, press an operator, press a number = result
  function handleNumber(number) {
    currentInput += number;
    console.log('Current Input:', currentInput); 
  }
  function handleOperator(op) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
      calculateResult(); 
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    console.log('Operator:', operator); 
  }
  function calculateResult() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operator) {
      case OPERATORS.add:
        result = prev + current;
        break;
      case OPERATORS.subtract:
        result = prev - current;
        break;
      case OPERATORS.multiply:
        result = prev * current;
        break;
      case OPERATORS.divide:
        result = prev / current;
        break;
      default:
        return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    console.log('Result:', result); 
  }
  function clearCalculator() {
    currentInput = '';
    operator = '';
    previousInput = '';
    console.log('Calculator cleared'); 
  }





