// Exercise 1: Simple If/Else Statement

// let x = 5;
// let y = 10;
// console.log(x);
// console.log(y);


// let x = prompt ("Please enter value X");
// console.log (x);
// x = Number(x)

// let y = prompt ("Please enter value Y");
// console.log (y);
// y = Number(y)

// if (x > y) {
// 	alert ("X is the BIGGEST number!")
// }

// else if (y > x) {
// 	alert ("Y is the BIGGEST number")
// }

// else if (x == y) {
// 	alert ("X is equal to Y")
// }

// else {
// 	alert ("Retard Alert")
// }


// Exercise 2: Chihuahua

// let newDog = "Chihuahua";
// let res = newDog.length;
// console.log(res);

// let res1 = newDog.toUpperCase(newDog);
// console.log(res1);

// let res2 = newDog.toLowerCase(newDog);
// console.log(res2);

// let dog = "newDog";
// let res3 = dog.length;
// console.log(res3);

// let res4 = Number(res3);
// let res5 = Number(res);

// if (res4 == res5) {
// 	console.log ("I love Chihuahuas, it’s my favorite dog breed")
// }

// else {
// 	console.log ("I dont care, I prefer cats")
// }


// Exercise 3: Even Or Odd

// let x = prompt ("Please enter your value.");
// console.log (x);
// x = Number(x)

// if ((x % 2) == 0 ) {
// 	alert("Your value is an even number.")
// }

// else {
// 	alert ("Your value is an odd number")
// }



// Exercise 4: Group Chat

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
let res = users.length
console.log (res)

if (res === 1) {
	console.log (users[0]+"is online.")
}

else if (res === 2) {
	console.log(users[0]+ " and "+ users[1]+ " are online.")
}

else if (res > 2) {
	console.log(users[0]+ ", " + users[1] +" and "+ (res - 2)+ " are online.")
}

else {
	console.log("No one is online.")
}