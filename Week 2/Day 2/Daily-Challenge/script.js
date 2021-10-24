
let sentence = "The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
console.log(wordNot);
let wordBad = sentence.indexOf("bad");
console.log(wordBad);

let arr = sentence.split("");

console.log(arr);

if(wordNot < wordBad && wordNot != -1 && wordBad != -1){
	arr.splice(wordNot, wordBad-wordNot+3, "good");
	console.log(arr);
	sentence = arr.join("");

}
console.log (sentence)
