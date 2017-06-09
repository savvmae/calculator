
var calculator = document.querySelector('.calculator');
var input = calculator.querySelector('.number');
var toCalculate = [];
var displayCell = calculator.querySelector('.wide-load');

var add = calculator.querySelector('input[value="+"]');
var multiply = calculator.querySelector('input[value="X"]');
var divide = calculator.querySelector('input[value="/"]');
var subtract = calculator.querySelector('input[value="-"]');
var equals = calculator.querySelector('input[value="="]');
var hasBeenEvaluated = false;

calculator.addEventListener('click', function(event){
  var newValueEntered = event.target.value;
  toCalculate.push(newValueEntered);
  var displayWithoutCommas = toCalculate.join(" ");
  displayCell.textContent = displayWithoutCommas;
  stringOfInput = displayWithoutCommas.toString();
  if (event.target.value === "C") {
    displayCell.textContent = "";
    toCalculate = [];
  }
  if (event.target.value === "=") {
    for (i=0; i <toCalculate.length; i ++) {
      if (toCalculate.includes(multiply.value)) {
          var separatedValues = stringOfInput.split("X");
          var result = parseInt(separatedValues[0]) * parseInt(separatedValues[1]);
          displayCell.textContent = result;
      } else if (toCalculate.includes(divide.value)) {
          var separatedValues = stringOfInput.split("/");
          var result = parseInt(separatedValues[0]) / parseInt(separatedValues[1]);
          displayCell.textContent = result;
      } else if(toCalculate.includes(add.value)) {
          var separatedValues = stringOfInput.split("+");
          var result = parseInt(separatedValues[0]) + parseInt(separatedValues[1]);
          displayCell.textContent = result;
      } else if (toCalculate.includes(subtract.value)) {
          var separatedValues = stringOfInput.split("-");
          var result = parseInt(separatedValues[0]) - parseInt(separatedValues[1]);
          displayCell.textContent = result;
    }
  }
  console.log(result);
  hasBeenEvaluated = true;
}
});
