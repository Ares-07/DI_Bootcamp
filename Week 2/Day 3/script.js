// ------ Data Structure : Objects

// let obj = {};
// let obj1 = new Object();

// let obj = {
// 	user: "ares",
// 	email: "ares@gmail.com",
// 	num: [1,2,3,4,5],
// 	obj1: {
// 		a:"aaa",
// 		b:"bbb"
// 	}
// }

// console.log(obj.user);
// console.log(obj.email);
// console.log(obj.num[2]);
// console.log(obj.obj1.b);


// let obj1 = {...obj};
// obj1.user = "advait";
// console.log(obj);
// console.log(obj1);

// delete obj1.user

// obj1.address = "Mauritius"


//-------------- Deep Cloning (nested) / json

// let obj = {
// 	user: "John",
// 	username: {
// 		name:"JJ"
// }

// // let obj1 = (...obj);
// let str = JSON.stringify(obj);
// console.log(str)
// let obj1 = JSON.parse(str);
// console.log(obj1)

// obj1.user = "Bala"

// obj1.username.name = "BoBo";

// console.log (obj)
// console.log(obj1)


// --------------- loop --------------------

// let arr = ["aaa", "bbb" , "ccc" , "ddd", "eee"];
// console.log(arr[0])
// let len = arr.length
// for (let i=0; i<len; i++){
// 	console.log(arr[i]);
// }


// -------------- for in


// let obj = {
// 	user:"aaa"
// 	pass: "bbb"
// }
// for (x in arr){
// 	console.log(x, obj[x]);

// }


// ----------------- for of


// for ( x of arr){
// 	console.log(x)
// }

// ---------------
//let arr = ["aaa", "bbb" , "ccc" , "ddd", "eee"];
//arr.forEach((item,i)=>{
//	console.log(item,i)
//})