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
	let word_to_guese = "";
	do{
		// get user hidden word
		word_to_guese = prompt('Please enter a word to guese - min 8 Letters');
		console.log(word_to_guese.length);
	}
	while(word_to_guese.length < 8) //should be 8 min of 8 letters

	let word_arr = word_to_guese.split('');
	let word_hidden = "*".repeat(word_to_guese.length).split('');

	console.log(word_hidden.join(''));

	let guesses = 0;
	// 10 guesses for user2
	while(guesses < 10){
		let letter = prompt('Pleas guese a letter');
		// check if letter exists
		for (var i = 0; i < word_arr.length; i++) {
			if(word_arr[i]===letter){
				word_hidden[i] = letter;
			}
		}
		console.log(word_hidden.join(''));
		if(!word_hidden.includes('*')){
			console.log('You Won');
			return;
		}
		guesses++;
	}
	if(guesses>=10){
		console.log('You Lose');
	}
}
hangmanGame();