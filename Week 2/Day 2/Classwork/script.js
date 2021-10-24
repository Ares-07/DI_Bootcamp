// Exercise 1 - Keyless car ----------------------------------

// *NOTE : = is for assignment , == is equal to


// let result = prompt ("Please enter your age.");
// console.log (result);
// result = Number(result);

// if (result == 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!")
// }

// else if (result > 18) {
// 	alert("Powering On. Enjoy the ride!")
// }

// else {
// 	alert ("Sorry, you are too young to drive this car. Powering off.")
// }

// -------------------------------------------------------------------

// Exercise 2

// let a = 2 + 2; 

// switch (a) {
//   case 3:
//     alert( 'Too small' ); // Step 1
//     break; // Step 2
//   case 4:
//     alert( 'Exactly!' ); // Step 3
//     break; // Step 4 and break out
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// -------------------------------------------------------------------

// Exercise 3

// let b = 2 + 2;

// switch (b) {
//   case 4: 
//     alert('Right!'); //Step 1
//     break; //Step 2 and break out

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }

// -------------------------------------------------------------------


// Exercise 4

// Convert the following into if statements

// switch (browser) {
//   case ‘Edge’:
//     alert( “You’ve got the Edge!” );
//     break;
//   case ‘Chrome’:
//   case ‘Firefox’:
//   case ‘Safari’:
//   case ‘Opera’:
//     alert( ‘Okay we support these browsers too’ );
//     break;
//   default:
//     alert( ‘We hope that this page looks ok!’ );
// }



// let browser = 'Firefox';

// if (browser == "Edge") {
// 	alert ("You've got the Edge!")
// };

// else if (browser == "Chrome" || browser == "Safari" || browser == "Opera" || browser == "Firefox" ) {
// 	alert ("OKay we support these browser too.")
// };

// else {
// 	alert ("We hope that this page looks ok!")
// };

// -------------------------------------------------------------------

// Exercise 5
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

// Exercise 6
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.


let result = prompt ("Please enter your age.");
console.log (result);
result = Number(result)

// Check the range between

if (result >= 14 && result <= 90) {
	alert("Congrats!, You are eligible.")
}

else {
	alert("Ooops, you are not eligible, better luck next time!")
}

// Check the range outside

// Variant 1

if (!(result >= 14 && result <= 90)) {
	alert ("You are one lucky person!")
}

else {
	alert ("Bad luck! you form part of the majority.")
}

// Variant 2

if (result <= 14 || result >= 90) {
	alert("You are one lucky person!")
}

else {
	alert("Bad luck! you form part of the majority.")
}