let root = document.getElementById('root');
let str = "abcdefghijklmnopqrstuvwxyz";
let left = 0;
for (var i = 0; i < str.length; i++) {
	let div = document.createElement('div');
	div.classList.add('box');
	div.setAttribute('draggable', 'true');
	div.innerText = str[i];
	div.style.left = left + "px";
	left = left + 51;
	root.appendChild(div);
	div.addEventListener('dragend', function(e){
		let x = e.clientX;
		let y = e.clientY;
		div.style.left = x + 'px';
		div.style.top = y + 'px';
		console.log(x, y);
	})
}

let arr = [3,5,7,8]
