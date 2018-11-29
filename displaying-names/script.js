function getFormValue(){

	let fNam = document.getElementById("firstName").value;
	let lNam = document.getElementById("lastName").value;
	document.getElementById("eText").innerHTML = "Hello " + fNam + ' ' + lNam;
}
