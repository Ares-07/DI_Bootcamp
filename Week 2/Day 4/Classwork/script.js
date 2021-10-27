// Learning Function - Exercise 1


function myAge (a){
	let mum = (a * 2);
	let dad = (mum * 1.2);
	let arr = [mum, dad]
	console.log(mum)
	console.log(dad)
	
}

let age = myAge (23)


// Exercise 2


function myAge (a){
	let mum = (a * 2);
	return mum;
}

myAge(23)
console.log(myAge(23))