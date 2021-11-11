function signup(e) {
  event.preventDefault();
  console.log('working')

  var email = document.getElementById('email').value;
  var username = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  var user = {
    email: email,
    username: username,
    password: pass,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(user, json);
  console.log("user added");
}

function loginFunc(e) {
  event.preventDefault();
  var email = document.getElementById("email1").value;
  var pass = document.getElementById("password1").value;
  var result = document.getElementById('result');

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);

  console.log(email);
  console.log(pass);
  console.log(data);

  if (user == null) {
    result.innerHTML = "Wrong Email, Try Again.";
  } else if (email == data.email && pass == data.password) {
    result.innerHTML = "Logged In";
  } else {
    result.innerHTML = "Wrong Password, Try Again";
  }
}