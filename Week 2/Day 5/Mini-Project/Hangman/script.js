//step 1
//get user hidden word


//should be a min of 8 letters


//step 2
//get user2 letter


//step 3
//10 guesses for user2



//to check
//prevent choosing the same letter



function hangmanGame() {
	let word_to_guess = "";
	do {
		//get user hidden word
	let word_to_guess = prompt ("Please enter a word to guess -  min 8 letters")
	console.log (word_to_guess)	
	}
	while(word_to_guess.length < 8)//should be a min of 8 letters

	let word_arr = word_to_guess.split(' ');
	let word_hidden = "*".repeat(word_to_guess.length).split(' ');


	console.log(word_hidden.join(''));


	let guesses = 0;
	//10 guesses for user2
	while (guesses < 10){
		let = prompt('Please guess a letter');

		//check if letter exists
		for (let i =0; i < word_arr.length; i++){
			if (word_arr[i]===letter){
				word_hidden[i] = letter;
			}
		}
		if (word_hidden.includes('*')){
			alert('You won!');
			return;
		}
		console.log(word_hidden.join(''));
		guesses++
	}
	if (guess >=10){
		alert("You lose");
	}
}
hangmanGame();