// Function declaration
// local & global


let name = "John";

function shoeMessage(){
	let name = "Bob";
	console.log("Hello " + name);
}
console.log(name)

shoeMessage()


// parameters


function shoeMessage(from, msg){
	console.log(from + ":" +msg);
}

shoeMessage("Ann", "Hello");
shoeMessage("bane", "Bye");
shoeMessage("1", "2");


// Default parameters


function shoeMessage(from, msg = "hello"){
	console.log(from + ":" +msg);
}

shoeMessage("Ann",);
shoeMessage("bane", "Bye"); //overwrites the global para.

// ---------

function shoeMessage(from, msg){
	if(msg === undefined){
		msg = hello
	}
	console.log (from+":"+msg);
}

shoeMessage("Ann");


// ---------

function shoeMessage(from, msg){
	msg = msg || "Hello";
	console.log (from+":"+msg);
}

shoeMessage("Ann");


// ---------

function sum (a,b){
	let sum = a + b;
	let arr = [{a:1},{b:2}]
	return sum;
}

let res = sum (1,2);
console.log(res);


// --------- example

let age = 18;

function checkAge(theage) {
	if (theage >= 18){
		return true;
	}
	else {
		return false;
	}
}

let res = checkAge(age);
console.log(res); 

if (res == true) {

	console.log("Ok")
}
else {
	console.log("Not Okay")
}



// ----------------------------------------------

// Different ways of using function

// 1.
function getName(){
	return "john";
}


// 2.
let getName = function(param,param2){
	return 'john';
}


// 3.
let getName = (age,mum) => {

}


// ----- C/W

// 1.
function ask(question){
	if(question.length > 3){
		return 'good';
	}
	else{
		return 'not good'
	}
}

// 2.
let ask = function (question){
	if(question.length > 3){
		return 'good';
	}
	else{
		return 'not good'
	}
}


// 3. lastest
let ask = (question) => {
	if(question.length > 3){
		return 'good';
	}
	else{
		return 'not good'
	}
}

// ---------------------------

var x = 6;

console.log(this.x);


let obj = {
	a: function(){
		var x = 10;
		console.log(x)
	}
}

console.log(obj.a());