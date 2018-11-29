document.getElementById('boxOne').addEventListener('mouseover', makeBoxGreen);

document.getElementById('boxOne').addEventListener('mouseleave', makeBoxRed);

document.getElementById('toggleButton').addEventListener('click', changeToggleButton);

function changeToggleButton(){
	let toggleButton = document.getElementById('toggleButton');
	if( toggleButton.value === 'ON' ){
		toggleButton.value = 'OFF';
		document.getElementById('boxOne').removeEventListener('mouseover', makeBoxGreen);
	}else{
		toggleButton.value = 'ON';
		document.getElementById('boxOne').addEventListener('mouseover', makeBoxGreen);
	}
}



function makeBoxGreen(){
	document.getElementById('boxOne').style.backgroundColor = 'green';
}

function makeBoxRed(){
	document.getElementById('boxOne').style.backgroundColor = 'red';
}
