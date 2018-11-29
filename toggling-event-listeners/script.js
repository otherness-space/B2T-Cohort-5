let toggleButton = document.getElementById('toggleButton');

function changeToggleButton() {
  if (toggleButton.value === 'ON') {
    toggleButton.value = 'OFF';
  } else {
    toggleButton.value = 'ON';
  }
}

document.getElementById('toggleButton').addEventListener('click', changeToggleButton);

// ---------------------------------------------------------------

/*
function makeBoxGreen(){
	document.getElementById('myBox').style.backgroundColor = 'green';
}

document.getElementById('myBox').addEventListener('mouseover', makeBoxGreen);


function makeBoxRed(){
	document.getElementById('myBox').style.backgroundColor = 'red';
}

document.getElementById('myBox').addEventListener('mouseleave', makeBoxRed);
*/

let myBox = document.getElementById('myBox');

function changeBoxColor() {
  if (toggleButton.value === 'ON' && myBox.style.backgroundColor === 'red') {
    myBox.style.backgroundColor = 'green';
  } else {
    myBox.style.backgroundColor = 'red';
  }
}

document.getElementById('myBox').addEventListener('mouseover', changeBoxColor);
document.getElementById('myBox').addEventListener('mouseleave', changeBoxColor);

// ------------------------------------------------------------


let buttonClicks = 0;

function increaseButtonClicks() {
  buttonClicks++;
  document.getElementById('myButton').value = buttonClicks + ' clicks';
  console.log(buttonClicks + ' clicks');
}

// ------------------------------------------------------------

let buttonClicks2 = 0;

function increaseButtonClicks2() {
  buttonClicks2++;
  document.getElementById('myButton2').value = buttonClicks2 + ' clicks';
  console.log(buttonClicks2 + ' clicks');
}

document.getElementById('myButton2').addEventListener('click', increaseButtonClicks2);
