const nav = document.getElementById("auth");
const button = document.getElementById("register");

let bars = document.getElementById("bars");
let navigation = document.getElementById("nav");

if(!sessionStorage.getItem("auth")){
  nav.innerHTML = "Register";
  nav.href = "register.html";

  button.innerHTML = "Register";
  button.href = "register.html";
} else {
  nav.innerHTML = "TODO";
  nav.href = "todo.html";

  button.innerHTML = "Get started!";
  button.href = "todo.html";
}