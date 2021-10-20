// Variable

// var message;
// message = "Hello World";

var message = 10;
var user = "user1";
var email = "user@email.com";
console.log(message, user, email);


let messageA = 20;
let userA = "user2";
let emailA = "user2@email.com";
console.log(messageA, userA, emailA);

const color = "red";

// CLASSWORK

let admin = "Ares";
let name = "Advait";
admin = "advait";
// admin = name;
console.log (admin, name);




// JS Types - number / string / boolean / undefined / null

// JS - Number

let num1 = 10;
let num2 = 5;
console.log (num1 + num2);

let mes1 = "hello";
let user2 = "ares";
console.log (mes1 + user2);


// JS - Boolean

let isGreater = true;
let isLess = false;


// JS - Undefined

let und;
console.log(und);


// JS - null

let a = null;
console.log (a);



// alert (incorrect password)


// Prompt
let result = prompt ("Please under a number from 1 to 10", "5");
console.log (result);

// confirm
let answer = confirm("are you happy?")
console.log (answer)


// conversion
let num = 10;
let num3 = 5;
console.log (num + num3);

let numtxt = String(num);
let numtxt3 = String(num3);
console.log (numtxt + numtxt3);

num = String (num);
console.log(typeof num);
// num3 = String(num3);
// console.log (num + num3);


// let num3 = "10";
// num3 = Number (num3);


Boolean (0)
Boolean(1)


// Classwork2 - need to do prompt add

// let num5 = 100
// let num6 = 5
// console.log (num5 / num6)

// num5 = String (num5)
// num6 = String (num6)
// console.log (num5 + num6)

// --------------------------------------

// NUmber
// % (5%2=1) 2+2,1remainder
// ** (2**3=8) 2x2x2


// let x = 0;
// x++;
// console.log(x);

// let y = 0;
// 7--;
// console.log(y);


// let counter = 1;
// console.log (2 * ++counter);

// JS DataStructure - Array

let arr = [10,5,20];
console.log ( arr[0] );

let arr2 = ["apple","orange","plum"];
console.log ( arr2[2] );

let arr3 = ["apple", 5, true];

let arr4 = [30,
	["apple","orange"],
	false
];
console.log ( arr4[1][1] );

let arr5 = ["pear", 6, true];
arr5[1] = 10
console.log (arr5)