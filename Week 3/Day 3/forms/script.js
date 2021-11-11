// let frm = document.forms.my;
// let user_name = frm.elements.username;

// frm.addEventListener('submit', (e)=>{
//   e.preventDefault();
// })
//
//
// let user = document.getElementById('username');
// user.addEventListener('input',function)
//
//
// let getData = (e) => {
//   e.preventDefault();
//   frm.elements.username.value;
//   let user = document.getElementById('username').value;
//   let pass = document.getElementById('password').value;
//   console.log(user,pass);
// }

// let id = setTimeout (function () {
//   let root = document.getElementById('root')
//   root.innerText = 'text';
// })

function setTime_out (){
  setTimeout (function () {
    console.log('It is raining and i dont like it ')
  },3000);
}

function setInter_val(){
  setInterval (function (){
    console.log('hello form the other side');
  },2000);
}


function clearInter_val(){

}
