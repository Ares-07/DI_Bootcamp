let btn_elem = document.getElementById('btn');

btn_elem.addEventListener('click', function(){
  addRow();
});

function addRow(){
  let main_div = document.getElementById('sampleTable');

  let div = document.createElement('div');

  let p = document.createElement('p');
  p.innerText = "Row Col";
  div.appendChild(p);

  let p1 = document.createElement('p');
  p1.innerText = "Row Col";
  div.appendChild(p1);

  main_div.appendChild(div);

}


function createUsers(){
  let div_elem = document.getElementById('main');

  let arr = [
    {id:1, user:'John',email:'john@gmail.com'},
    {id:2, user:'Sara', email:'sara@gmail.com'},
    {id:3, user:'Yasaar', email:'yasaar@gmail.com'},
    {id:10, user:'Yeshna', email:'yeshna@gmail.com'},
    {id:5, user:'Varshana', email:'varshana@gmail.com'}
  ];

  arr.forEach((item,i)=>{
    // console.log(item.email);
    let div = document.createElement('div');
    div.classList.add('inner-div')

    let img = document.createElement('img');
    img.setAttribute('src', 'https://robohash.org/'+item.id+'?size=120x120');
    img.setAttribute('src', `https://robohash.org/${item.id}?size=120x120`);
    div.appendChild(img)

    let user = document.createElement('h2');
    user.innerText = item.user;
    div.appendChild(user);

    let email = document.createElement('p');
    email.innerText = item.email;
    div.appendChild(email);

    div_elem.appendChild(div);

  })
}
