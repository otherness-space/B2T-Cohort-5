let fruits = ["APPLE", " ORANGE", " KIWI"];
  document.getElementById("fruitsH1").value;
  document.getElementById("answerDisplay").innerHTML = fruits;

console.log(fruits);


function addFruit() {
  let userFruit = document.getElementById("fruitId").value.toUpperCase();
    fruits.push(userFruit);
    fruits.sort();
    document.getElementById("fruitsH1").innerHTML = fruits.join(" with a ");
    console.log(fruits);
}
