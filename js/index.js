import { numbers, operations, display } from './querySelector.js';

let operation = null;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = "";
    }
    display.textContent += number.textContent;
  })
})

operations.forEach((op) => {
  op.addEventListener("click", () => {
    if (operation === null && op.textContent !== "=") {
      display.textContent += op.textContent;
      operation = op.textContent;
    }
  })
})

document.getElementById("ckll-equalsBtn").addEventListener("click", () => {
  const expression = display.textContent;
  if (operation !== null && operacaoValida(expression)) {
    let operationIndex = expression.indexOf(operation);
    let firstNumber = parseInt(expression.substring(0, operationIndex));
    let resultado = 0;
    let tabela = document.createElement('table');
    let tbody = document.createElement('tbody');

    for (let i = 0; i <= 9; i++) {
      let tr = document.createElement('tr');
      let tdFirstNumber = document.createElement('td');
      let tdOperation = document.createElement('td');
      let tdNumber = document.createElement('td');
      let tdEqual = document.createElement('td');
      let tdResult = document.createElement('td');


      tdEqual.textContent = "=";
      tdFirstNumber.textContent = firstNumber;
      tdOperation.textContent = operation;
      tdNumber.textContent = i;
      switch (operation) {
        case '+':
          resultado = firstNumber + i;
          break;
        case '-':
          resultado = firstNumber - i;
          break;
        case '*':
          resultado = firstNumber * i;
          break;
        case '/':
          resultado = firstNumber / i;
          break;
      }
      tdResult.textContent = resultado;

      tr.appendChild(tdFirstNumber);
      tr.appendChild(tdOperation);
      tr.appendChild(tdNumber);
      tr.appendChild(tdEqual);
      tr.appendChild(tdResult);
      tbody.appendChild(tr);
    }

    tabela.appendChild(tbody);
    document.body.appendChild(tabela);
  } else {
    display.textContent = "Operação inválida";
  } 
  operation = null;
})

document.getElementById("ckll-clear").addEventListener('click', () => {
  display.textContent = "0";
  operation = null;
  
})

document.getElementById("ckll-clearTab").addEventListener('click', () => {
  let tabelaExistente = document.querySelector('table');
  if (tabelaExistente) {
    tabelaExistente.remove();
  }
})

function operacaoValida(expression) {
  
   return /^\d+[+\-*\/]?$/.test(expression);
}



