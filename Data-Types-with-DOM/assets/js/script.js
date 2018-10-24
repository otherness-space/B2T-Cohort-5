let word = prompt('Enter word to convert to pig Latin');
// assuming word starts with consonant
// get the first letter from word
// get word without first letter
// add first letter to end
// add ay to end
let pigLatin = word.slice(1) + word.charAt(0) + 'ay';
alert( pigLatin.toLowerCase() )
// document.getElementById('helloMyNameIs').innerHTML =
document.getElementById('helloMyNameIs').innerHTML = "Hello! Your name in Pig Latin is " + pigLatin.toLowerCase() +" !";
// "Hello! Your name in Pig Latin is " + pigLatin.toLowerCase
