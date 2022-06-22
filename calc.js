let divsquare = document.getElementsByClassName('square');
let erase = document.getElementById('erase');
let power = document.getElementById('power');
let root = document.getElementById('root');
let userOperation = document.getElementById('calculate');



const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0."
      calculator.waitingForSecondOperand = false;
      return
    }
  
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      userOperation.innerHTML = firstOperand +" " + operator + " " + secondOperand;
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      userOperation.innerHTML = firstOperand + " " + operator + " " +secondOperand;
      return firstOperand - secondOperand; 
    } else if (operator === '*') {
      userOperation.innerHTML = firstOperand + " " + operator + " " + secondOperand;
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      userOperation.innerHTML = firstOperand + " " + operator + " " + secondOperand;
      return firstOperand / secondOperand;
    } 
    return secondOperand;
}
  
  function reset() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    userOperation.innerHTML = '';
  }
  
  function updateScreen() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateScreen();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case 'X&#178;':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case 'all-clear':
        reset();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputDigit(value);
        }
    }
  
    updateScreen();
  });

erase.onclick = function(){
    document.getElementById('screen-total').innerHTML =  document.getElementById('screen-total').innerHTML.slice(0, -1);
    //console.log(document.getElementById('screen-total').innerHTML);
    calculator.displayValue = document.getElementById('screen-total').innerHTML;
}

power.onclick = function(){
    let  a = document.getElementById('screen-total').innerHTML;
    document.getElementById('screen-total').innerHTML *=  document.getElementById('screen-total').innerHTML;
    calculator.displayValue = document.getElementById('screen-total').innerHTML;
    userOperation.innerHTML = a + " x " + a; 
}
root.onclick = function(){
    let  a = document.getElementById('screen-total').innerHTML;
    document.getElementById('screen-total').innerHTML =  Math.sqrt(document.getElementById('screen-total').innerHTML);
    calculator.displayValue = document.getElementById('screen-total').innerHTML;
    userOperation.innerHTML = "&#8730;x";
}



for(let i = 0; i < divsquare.length; i++){
    divsquare[i].onmouseenter = function(){
        divsquare[i].style.backgroundColor = "white";
        divsquare[i].style.fontSize = "55px";
    };
    divsquare[i].onmouseleave = function(){
        divsquare[i].style.backgroundColor = "mediumblue";
        divsquare[i].style.fontSize = "30px";
    };
};