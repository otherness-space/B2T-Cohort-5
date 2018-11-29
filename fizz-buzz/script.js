let num = 1;
while (num <= 100) { // num <101

  if ((num % 3 === 0) && (num % 5 === 0)) {

    console.log("FizzBuzz")

  }
  if (num % 3 === 0) {
    console.log("Fizz")


  } else if (num % 5 === 0) {
    console.log("Buzz")


  } else {
    console.log(num);

  }
  num++;
}



// }

//  iterate / 3 % 2 === 0 && iterate / 5 % 2 === 0

// if( iterate / 15 % 2 === 0 || iterate / 15 % 2 === 1 || ( iterate / 3 % 2 === 0 && iterate / 5 % 2 === 0 ) ){
//   console.log('Fizz');
// }else if( iterate / 5 % 2 === 0 || iterate / 5 === 1){
//   console.log('Buzz');
// }else if( iterate / 3 % 2 === 0 || iterate / 3 === 1 ){
//   console.log('FizzBuzz');
//
