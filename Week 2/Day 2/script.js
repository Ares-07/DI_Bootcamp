// let arr = [];

// let arr2 = new Array();

// arr2[0] = "a";
// arr.push ("b");



// -----------------------------------------------

// primitive = by value

// let a = 10;
// let b;
// b = a;
// console.log(a);
// console.log(b);


// b = 6 ;

// console.log(a);
// console.log(b);


// ----------------------------------------------------------

// array/object = by ref


// let arr1 = [10,6,4];
// arr2 = [...arr1];
// // console.log(arr1);
// // console.log(arr2);

// arr2[1] = 5;
// console.log(arr1);
// console.log(arr2);



// ---------------------------------------------------------

// Conditionals

// if / else if / else statement

// let a =  10;
// let b = 10;

// if (a>b) { //true or false
// 	console.log("yes1");
// }

// else if (a==b){
// 	console.log("yes2");
// }

// else if (a>b){
// 	console.log("yes3");
// }

// else {
// 	console.log("no");
// }

// console.log ("after condition");


// switch

let a = 2 + 2

switch (10){
	case 8:
	console.log ('it is 8');

	break;
	case 4:
	console.log ('it is 10');

	break;
	default:
	console.log ('not');
}



let a = ("news")

switch ("news") {
	case "home":
	console.log ('go to homepage')
}


// and && / or || / not !

// &&

let a = 6;
let b = 6;
let c = 7;
let d = 7;

if (a==b && c==d){
	console.log ('true');
}
else {
	console.log ('false')
}


// ||

let e = 6;
let f = 6;
let g = 7;
let h = 6;

if (e==g || e==h){
	console.log ('true1');
}
else {
	console.log ('false1')
}

// !

let i = 6;
let j = 6;
let k = 7;
let l = 6;

if ( !(e==g) ){
	console.log ('true2');
}
else {
	console.log ('false2')
}