// ------------ Exercise 1 : Your Favorite Colors

// let arr = ["red","blue","violet","white","black","pink"]
// console.log(arr)
// for (let i = 0; i < arr.length; i++){
// console.log("My choice no."+ (i+1) +" is "+ arr[i] )
// }

// let arr1 = ["st","nd","rd","th","th","th"]
// for (let i = 0; i < arr.length; i++){
// console.log("My "+ ((i+1)+arr1[i]) +" choice is "+ arr[i] )
// }

//------------------ Exercise 2 : List Of People

// let people = ["Greg", "Mary", "Devon", "James"]
// console.log(people)

// people.shift()
// console.log(people)

// people.splice(2,2,"Jason")
// console.log(people)

// people.push(prompt("Enter your name:"))
// console.log(people)

// let people1 = ["Mary", "Devon", "Jason", "ares"]
// let res = people1.slice(1,3)
// console.log(res)

// let res1 = people1.indexOf(people1[1])
// console.log(res1)

// let res2 = people1.indexOf("Foo")
// console.log(res2)

// let last = people.length-1
// console.log(people[last])


//---------------- Exercise 3 : Repeat The Question

// let result = prompt("Enter a number:")
// console.log(result)

// while (result<10){
// 	result++;
// 	prompt("Please enter a new number.")
// }

// Exercise 4 : Building Management

// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }
// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)
// console.log(building.nameOfTenants[2],building.numberOfRoomsAndRent.dan[0])

// let sum = building.numberOfRoomsAndRent
// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
//  	building.numberOfRoomsAndRent.dan.splice(1,1,1200)
//  	console.log(building.numberOfRoomsAndRent.dan)
//  	console.log("The sum is greater than Dan's rent")
// }
// else{
// 	console.log("The sum is not bigger than Dan's rent")
// }

//--------------------- Exercise 5 : Family

// let family = {
// 	member1: "aaa",
// 	member2: "bbb",
// 	member3: "ccc",
// 	member4: "ddd"
// }
// for (i in family){
// 	console.log(i);
// }
// for (i in family){
// 	console.log(family[i]);
// }


//---------------- Exercise 6

// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// let str= ""
// for (i in details){
// 	str=str+ i + "  " + details[i] + " "
// }
// console.log(str)


//----------------- Exercise 7 : Secret Group

//
//let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//console.log(names);
//let names1 = names.sort();
//console.log(names.sort());
//
//let arr = []
//
//for (i in names){
//  let res = names[i].slice(0,1)
//  console.log(res)
//  arr.push (res)
//}
//  console.log (arr)
//  let res1 = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]
//console.log(res1)

let infoAboutMe = () => {
	let name = "advait";
	let age = "23";
	let hobbies = "gaming";
	console.log("My name is " + name + " and i'm " + age + " yrs old." "My fav. hobby is " + hobbies + ".")
}
