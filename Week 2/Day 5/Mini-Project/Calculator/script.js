
// Mini-Project : Calculator


let num = prompt ("Enter your first number.")
num = Number(num)
console.log(num)

let calc = prompt ("Choose your method of calculation : Addition(+),  Substraction(-), Multiplication(*), Division(/) ")
console.log(calc)

let num1 = prompt ("Enter your second number.")
num1 = Number(num1)
console.log(num1)

let number = (num, calc, num1) => {
	if (calc == "+"){
		alert (num + num1);
		console.log (num + num1);
	}
	else if (calc == "-"){
		alert (num - num1);
		console.log(num - num1);
	}
	else if (calc == "*"){
		alert (num * num1);
		console.log(num * num1);
	}

	else if (calc == "/"){
		alert (num / num1)
		console.log(num / num1)
	}

}
number(num,calc,num1)