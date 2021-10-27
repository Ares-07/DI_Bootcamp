let num = prompt ("Guess my number between 0 to 10.")
num = Number(num)
console.log(num)
let ran = Math.floor(Math.random() * 11);
console.log (ran)

let playTheGame = (num) => {
	if (num != typeof(Number)) {
		alert(" Sorry Not a number, Goodbye!")

	}
	else if (num > 10 ){
		alert ("Sorry it’s not a good number, Goodbye")
	}

}
playTheGame(num)

let test = (num, ran) => {
	for (let i=0; i<=3; i++){
		if (num == ran) {
			alert("Winner!")
		}
		else if (num != ran){
			let num = prompt ("Wrong! Guess again.")
		}
	}

}