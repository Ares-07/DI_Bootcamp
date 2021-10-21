// Exercise 1

let numx = 5
let numy = "34"
console.log (numx + numy)

let num3 = 5
let num4 = "4"
console.log (num3 - num4)

let num5 = 10
let num6 = 5
console.log (num5 % num6)

let num7 = 5
let num8 = 10
console.log (num7 % num8)

let num9 = "Java"
let num10 = "Script"
console.log (num9 + num10)

let num11 = ""
let num12 = ""
console.log (num11 + num12)

let num13 = ""
let num14 = 0
console.log (num13 + num14)

let num15 = true
let num16 = true
console.log (num15 + num16)

let num17 = true
let num18 = false
console.log (num17 + num18)

let num19 = false
let num20 = true
console.log (num19 - num20)

let num21 = 3
let num22 = 4
console.log (num21 - num22)

let num23 = "Bob"
let num24 = "bill"
console.log (num23 + num24)


// Exercise 2.1

let me = ["my", "favorite", "color", "is", "blue"]
me.toString()
console.log(me.toString())

// Exercise 2.2

let admin = "ares" 
let name = "advait"

let res = admin.slice(0,2)
// let res2 = admin.slice(2,4)
console.log (res)
// console.log (res2)

let res3 = name.slice(0,2)
// let res4 = name.slice(2,6)
console.log (res3)
// console.log (res4)

let res5 = admin.replace(res, res3)
let res6 = name.replace(res3, res)
console.log(res5)
console.log(res6)

// Exercise 2.3

let numA = prompt ("Enter your 1st number.")
console.log(numA)
let numB = prompt ("Enter your 2nd number.")
console.log(numB)
alert (numA + numB)