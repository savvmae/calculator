var calculator = document.querySelector('.calculator');
var displayCell = calculator.querySelector('.wide-load');
var stringOfInput = "";
var allCells = document.querySelectorAll('.cell');

for (i = 0; i < allCells.length; i ++) {
  allCells[i].addEventListener('click', function(event){
    var clickedInput = event.currentTarget.value;
    if (clickedInput === "=") {
      stringOfInput = eval(stringOfInput);
      displayCell.value = stringOfInput;
    } else if (clickedInput === "sqrt") {
      stringOfInput = Math.sqrt(stringOfInput);
      displayCell.value = stringOfInput;
    } else if (clickedInput === "C") {
      stringOfInput = "";
      displayCell.value = stringOfInput;
    } else {
      stringOfInput += clickedInput;
      displayCell.value = stringOfInput;
    }
});
}
///The keydown works, but because the calculator is a form, the value resets when enter is pressed.
displayCell.addEventListener('keydown', function(event){
  if (event.keyCode === 13) {
    displayCell.value = eval(event.target.value);
  }
});


















//
// var calculator = document.querySelector('.calculator');
// var input = calculator.querySelector('.number');
// var toCalculate = [];
// var displayCell = calculator.querySelector('.wide-load');
//
// var add = calculator.querySelector('input[value="+"]');
// var multiply = calculator.querySelector('input[value="X"]');
// var divide = calculator.querySelector('input[value="/"]');
// var subtract = calculator.querySelector('input[value="-"]');
// var equals = calculator.querySelector('input[value="="]');
//
//
// calculator.addEventListener('click', function(event){
//   var newValueEntered = event.target.value;
//   toCalculate.push(newValueEntered);
//   var displayWithoutCommas = toCalculate.join(" ");
//   displayCell.textContent = displayWithoutCommas;
//   stringOfInput = displayWithoutCommas.toString();
//   if (event.target.value === "C") {
//     displayCell.textContent = "";
//     toCalculate = [];
//   }
//   if (event.target.value === "=") {
//     for (i=0; i <toCalculate.length; i ++) {
//       if (toCalculate.includes(multiply.value)) {
//           var separatedValues = stringOfInput.split("X");
//           var result = parseInt(separatedValues[0]) * parseInt(separatedValues[1]);
//           displayCell.textContent = result;
//       } else if (toCalculate.includes(divide.value)) {
//           var separatedValues = stringOfInput.split("/");
//           var result = parseInt(separatedValues[0]) / parseInt(separatedValues[1]);
//           displayCell.textContent = result;
//       } else if(toCalculate.includes(add.value)) {
//           var separatedValues = stringOfInput.split("+");
//           var result = parseInt(separatedValues[0]) + parseInt(separatedValues[1]);
//           displayCell.textContent = result;
//       } else if (toCalculate.includes(subtract.value)) {
//           var separatedValues = stringOfInput.split("-");
//           var result = parseInt(separatedValues[0]) - parseInt(separatedValues[1]);
//           displayCell.textContent = result;
//     }
//   }
// }
// });
