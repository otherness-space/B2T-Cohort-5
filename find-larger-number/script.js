// function greaterNumber(){
//   let variableNumber1 = prompt("Enter first number");
//   let variableNumber2 = prompt("Enter second number");
//   let variableNumber3 = prompt("Enter third number");
//
//   if(variableNumber1 > variableNumber2){
//     console.log(variable1 " > " variable2 " but check if > " variable3)
//   }else if(varriable2 > variable3){
//     console.log(variable2 " > " variable3 " and " variable1)
//   }else if(variable3 > variable2){
//     console.log(variable3 " > " variable2 " and " varialbe1)
//   }else{
//     console.log(variable1 " > " variable2 " and > " variable3)
//   }
// }

function largestNumber() {
  let number1 = parseInt(document.getElementById("userNumber1").value);

  let number2 = parseInt(document.getElementById("userNumber2").value);

  let number3 = parseInt(document.getElementById("userNumber3").value);


  if (number1 > number2 && number1 > number3) {
    document.getElementById('largestNumber').innerHTML = number1 + " is the largest number.";
  } else if (number2 > number1 && number2 > number3) {
    document.getElementById('largestNumber').innerHTML = number2 + " is the largest number.";
  } else if (number3 > number1 && number3 > number2) {
    document.getElementById('largestNumber').innerHTML = number3 + " is the largest number.";
  } else {
    document.getElementById('largestNumber').innerHTML = number1 + " and " + number2 + " and " + number3 + " are the same.";
  }
  console.log(number1);
  console.log(number2);
  console.log(number3);
}
