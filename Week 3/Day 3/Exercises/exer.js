let elem = document.getElementsByTagName('form')
console.log(elem[0])

let int1 = document.getElementById('fname')
let name1 = int1.getAttribute('name')
console.log(int1)
console.log(name1)

let int2 = document.getElementById('lname')
let name2 = int2.getAttribute('name')
console.log(int2)
console.log(name2)

let frm = document.getElementById('frm')
console.log(frm)

frm.addEventListener('submit', function(e){
  e.preventDefault();
  let fname_value = document.getElementById('fname').value;
  let lname_value = document.getElementById('lname').value;
  console.log(fname_value,lname_value);
  console.log(fname_value.trim().length);

})
