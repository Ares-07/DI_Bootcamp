let str = "Hello,world,in,a,frame."

//get the largest length of a word in an array
function getLength(arr){
	let len = 0;
	for ( let i=0; i<arr.length; i++){
		if (arr[i].length > len){
			len = arr[i].length;
		}
	}
	return len;
}


//calculate the spaces after a word
function calcSpaces (word, len){
	return len - word.length;
}


function wrapWords(param){

	// split words into array
	let words = param.split(",");
	console.log (words);
	//get the largest word
	let largest_len = getLength(words)
	//print 1st line
	console.log ("*".repeat(largest_len+4))
	for (let i = 0; i< words.length; i++){
		//get spaces after word
		let spaces = calcSpaces(words[i],largest_len)
		console.log ("* "+ words[i]+ " ".repeat(spaces) + " *")
	}

	// print last line
	console.log ("*".repeat(largest_len+4))
}
wrapWords (str);