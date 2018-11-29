let iterate = 1; // intialization

while(iterate < 101) // condition
  {
    if( (iterate / 5 % 2 === (0 || 1) ) && (iterate / 3 % 2 === (0 || 1) ) ){
      console.log('FizzBuzz');
    }
    else{
      console.log( iterate );
    }
    iterate ++;
}

//  iterate / 3 % 2 === 0 && iterate / 5 % 2 === 0

// if( iterate / 15 % 2 === 0 || iterate / 15 % 2 === 1 || ( iterate / 3 % 2 === 0 && iterate / 5 % 2 === 0 ) ){
//   console.log('Fizz');
// }else if( iterate / 5 % 2 === 0 || iterate / 5 === 1){
//   console.log('Buzz');
// }else if( iterate / 3 % 2 === 0 || iterate / 3 === 1 ){
//   console.log('FizzBuzz');
//
