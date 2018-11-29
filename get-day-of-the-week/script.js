let day = new Date().getDay()
console.log(day);
switch (day) {
  case 0:
    document.getElementById("dayOfWeek").innerHTML += "Sunday";
    break;
  case 1:
    document.getElementById("dayOfWeek").innerHTML += "Monday";
    break;
  case 2:
    document.getElementById("dayOfWeek").innerHTML += "Tuesday";
    break;
  case 3:
    document.getElementById("dayOfWeek").innerHTML += "Wednesday ";
    break;
  case 4:
    document.getElementById("dayOfWeek").innerHTML += "Thursday";
    break;
  case 5:
    document.getElementById("dayOfWeek").innerHTML += "Friday";
    break;
  case 6:
    document.getElementById("dayOfWeek").innerHTML += "Saturday";
    break;

}
