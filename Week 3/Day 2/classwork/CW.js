// let div_elem = document.getElementById('main');
//
// let arr = [
//   {user:'john',email:'john@example.com'},
//   {user:'sarah',email:'sarah@example.com'},
//   {user:'tom',email:'tom@example.com'},
//   {user:'mary',email:'mary@example.com'}
// ];
//
// // for (let i =0; i < arr.length; i++) {
// //   arr[i]
// //   let div1=document.createElement('div');
// //   console.log(div1);
// //   let text = document.createElement('h2');
// //   div1.append(text);
// //   text.append(arr[i].user)
// //   let text2 = document.createElement('p');
// //   div1.append(text2);
// //   text2.append(arr[i].email);
// //   div_elem.appendChild(div1)
// //  }
//
// arr.forEach((item,i) => {
//   // console.log(item.user);
//   let dev = document.createElement('div');
//   div.classList.add('inner-div')
//
//   let title = document.createElement('h2');
//   user.innerText = item.user;
//   div.appendChild(user);
//
//   let email = document.createElement('p')
//   email.innerText = item.email;
//   div.appendChild(email);
//
//   div_elem.appendChild(div);
// })
// ------------------------------------------------------
//
// let div_elem = document.getElementById('main');
// let arr = [
//   {id:1, user:'John',email:'john@gmail.com'},
//   {id:2, user:'Sara', email:'sara@gmail.com'},
//   {id:3, user:'Yasaar', email:'yasaar@gmail.com'}
// ];
// arr.forEach((item,i)=>{
//   // console.log(item.email);
//   let div = document.createElement('div');
//   div.classList.add('inner-div')
//   let img = document.createElement('img');
//   img.setAttribute('src', 'https://robohash.org/'+item.id+'?size=120x120');
//   img.setAttribute('src', `https://robohash.org/${item.id}?size=120x120`);
//   div.appendChild(img)
//   let user = document.createElement('h2');
//   user.innerText = item.user;
//   div.appendChild(user);
//   let email = document.createElement('p');
//   email.innerText = item.email;
//   div.appendChild(email);
//   div_elem.appendChild(div);
// })


//
// btm_elem.addEventListener('click', function(){
//   let
// })
//
// function msgToUser() {
//     alert('Please enter')
// }
// ----------------------------------------------------------------------------

let div_elem = document.getElementById('main');

function insertRow(){
  let user = document.createElement('p')
  user.innertext = 'new row'
  div.appendChild(user)
}


btn_elem.addEventListener('click',function(){
  addRow()
})
function addRow(){
  let main_div= document.getElementById('sampleTable');

let div = document.createElement('div');

let p = document.createElement('p');
p.innertext = 'Row Col';
div.appendChild(p)

let p1 = document.createElement('p');
p1.innertext = 'Row Col';
div.appendChild(p1)

}
main_div.appendChild(div);
