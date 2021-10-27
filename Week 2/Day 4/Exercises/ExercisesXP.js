// Exercise 1 : Information

// --------------------- Part I

// let infoAboutMe = () => {
// 	let name = "advait";
// 	let age = "23";
// 	let hobbies = "gaming";
// 	let arr = [name, age, hobbies];
// 	return arr;
	

// }
// let res = infoAboutMe()
// console.log ("My name is " + res[0] + " and I'm " + res[1] + "y rs old. My fav. hobby is " + res[2] + ".")


// // --------------------- Part II

// let infoAboutPerson = (personName, personAge, personFavoriteColor) => {
// 	console.log ("His name is " + personName + " and he is " + personAge + " yrs old. His fav. color is " + personFavoriteColor + ".")
// }

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// --------------------- Part III

// let infoAboutPerson = (personName, personAge, personFavoriteColor, personHobbies = []) => {
// 	console.log ("His name is " + personName + " and he is " + personAge + " yrs old. His fav. color is " + personFavoriteColor + " and here are my hobbies:")
// 	for (let i = 0 ; i < personHobbies.length ; i++){
// 		console.log(personHobbies[i])
// 	}

// }
// infoAboutPerson("David", 45, "blue" , ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow" ,["videoGame", "hanging out with friends", "playing cards"])


// --------------------- Exercise 2 : Keyless Car

// let res = prompt ("Enter your age:")

// let checkDriverAge = () => {
// 	if(res < 18){
// 		alert("Sorry, you are too young to drive this car. Powering off")
// 	}
// 	else if (res > 18){
// 		alert ("You are old enough to drive, Powering On. Enjoy the ride!")
// 	}
// 	else {
// 		alert ("Congratulations on your first year of driving. Enjoy the ride!")
// 	}
// } 
// checkDriverAge()


// --------------------- Exercise 3: Odd Or Even

// let checkNumber = () => {
// 	for (let i = 0; i<=100; i++){
// 		if ((i % 2) == 0) {
// 			console.log ([i]+ " is an even number.")
// 		}
// 		else {
// 			console.log([i] + " is an odd number.")
// 		}
// 	}
// }
// checkNumber()


// Exercise 4 : Tips

// let input = (num) => {
// 	if (num < 50) {
// 		console.log(0.2 * num)
// 	}
// 	else if (num >= 50 && num <= 200){
// 		console.log (0.15 * num)
// 	}
// 	else {
// 		console.log(0.1 * num)
// 	}
// }
// input(100)


// --------------------- Exercise 5 : Find The Numbers Divisible By 23

// let arr = []

// let isDivisible = (divisor) => {
// 	for (let i = 0; i<=500; i++){
// 		if ((i % divisor) == 0){
// 			console.log (i + " is divisible by " + divisor);
// 			arr.push(i)
// 		}

// 	}
// }
// isDivisible(12)
// console.log(arr)

// let sumArr = (arr) => {

// 	let num = 0
// 	for (let i=0; i<arr.length; i++){
// 		num = num + arr[i]
// 	}	
// 	return num;
// } 

// let a = sumArr(arr)
// console.log(a)


// --------------------- Exercise 6 : Amazon Shopping

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// let item = prompt ("Enter your desired item.")
// let checkBasket =  (res,item) => {
// 	console.log(res,item)
// 	for (i in res){
// 		console.log(res[i])
// 		if (i == item) {
// 			// console.log(res[i] + " is in you basket.");
// 			return true
// 		}

// 	}
// 	return false
// }
// let a = checkBasket(amazonBasket, item)
// if (a){
// 	console.log("exist")
// }
// else {
// 	console.log("Not exist")
// }



// ---------------------  Exercise 7 : Shopping List


// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let arr = ["banana","orange","apple"]
// let sum = 0
// let myBill = (arr) => {
// 	for (let i = 0; i <= arr.length; i++){
// 		if (stock[arr[i]] > 0){
// 			console.log(stock[arr[i]])
// 			sum += Number(prices[arr[i]])
// 		}
// 	}
// 	console.log(sum)
// }
// myBill(arr)

// // Exercise 8 : What’s In My Wallet ?

// let change = []
// let changeEnough = (item,change) => {
// 	console.log


// }


// Exercise 9 : Vacations Costs

let totalVacationCost = []

let nights = prompt("How many nights will you be spending?")
nights=Number(nights);
console.log(nights);
function hotelCost() {
	if(nights == 0 || nights == undefined){
		prompt("How many nights will you be spending?")
	}
	else{
		let sum=nights*140
		console.log("$" + sum)
		totalVacationCost.push(sum)
	}
}
hotelCost()
let destination = prompt("Where is your destination?")
console.log(destination);
function planeRideCost() {
	if(destination =="London"){
		let sum=nights*183
		console.log("$" + sum)
		totalVacationCost.push(sum)
		return sum
	}
	else if(destination == "Paris"){
		let sum=nights*220
		console.log("$" + sum)
		totalVacationCost.push(sum)
		return sum
	}
	else if (destination==0 || destination==undefined){
		prompt("Where is your destination?");
	}
	else{
		let sum=nights*300
		console.log("$" + sum)
		totalVacationCost.push(sum)
		return sum
	}
}
planeRideCost()
let carCost = prompt("Number of days for renting a car?");
carCost=Number(carCost);
console.log(carCost)
function rentalCarCost(){
	if(carCost>10){
		let sum= carCost*20
		console.log(sum);
		totalVacationCost.push(sum)
	}
		else if(carCost>0 && carCost<=10){
			let sum = carCost*40
		console.log(sum)
		totalVacationCost.push(sum)
		return sum 	
	 }
	else{
		prompt("Number of days for renting a car?");
	}
}
rentalCarCost()

console.log(totalVacationCost)
let num = 0
	for (let i=0; i<totalVacationCost.length; i++){
		num = num + totalVacationCost[i]
	}
	console.log(num)