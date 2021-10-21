
// Exercise 1

let fruits = ["Banana", "Apple", "Oranges","Blueberries"];
console.log(fruits)
let res = fruits.shift()
console.log(fruits)
let res1 = fruits.push("Kiwi")
console.log (fruits)

// let indexA = fruits.indexof("Apples")
// console.log(indexA)
// let res2 = fruits.slice(indexA,1)

let res2 = fruits.slice(0,1)
console.log(fruits)

let res3= fruits.reverse()
console.log(fruits)


// Exercise 2

let moreFruit = [
					"Banana",
					["Apples", "Oranges"],
					"Blueberries"
				]
console.log(moreFruit[1][1][0])