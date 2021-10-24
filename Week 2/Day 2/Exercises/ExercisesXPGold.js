// Exercise 1 : The World Translator


// let lang = prompt ("Enter your prefered language")
// console.log (lang)

// let res = lang.toLowerCase()
// console.log (res)

// switch (res){
// 	case "french":
// 	alert ("Bonjour")
// 	break;
// 	case "english":
// 	alert ("Hello")
// 	break;
// 	case "hebrew":
// 	alert ("Shalom")
// 	break;
// 	default:
// 	alert ("01110011 01101111 01110010 01110010 01111001")
// }

// Exercise 2 : The Grade Assigner

let res = prompt("Enter your grade")
console.log (res)

switch (res){
	case (res > 90):
	console.log("Grade A")
	break;
	case (res > 80 && res <= 90):
	console.log("Grade B")
	break;
	case (res >= 70 && res <= 80):
	console.log("Grade C")
	break;
	case (res < 70):
	console.log( "Grade D");
	break;
	default:
	alert ("you failed")
}