let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let num = i + 1;
  //use "th" for index 3 - 6
  //use "st","nd","rd" for index 0, 1 AND 2
  if (i <= 2) {
    document.getElementById('display').innerHTML += (i + 1) + o[i + 1] + ' choice is  ' + color[i] + '<br>';
  } else {
    document.getElementById('display').innerHTML += (i + 1) + o[0] + ' choice is ' + color[i] + '<br>';
  }
}
console.log(display);
