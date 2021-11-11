
function createUsers(){
  // fetch -> users api
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    //call func that will create user box
    // image -> robotHash -> https://robohash.org/3?size=200x200
    // name
    // email
    // username
  })
}
let main = document.getElementById('listPlanets');
for (var i = 0; i < data.length; i++) {
  let name = document.createElement('div');
    name.classList.add('name')
    name.innerText =  data[i].name;
    name.style.backgroundColor = data[i].color;
    main.appendChild(name)

let email = data[i].



})
