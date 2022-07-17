const loginForm = document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function checkUsername() {
  const username = localStorage.getItem(USERNAME_KEY);

  if (username) {
    paintGreetings(username);
  } else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  }
}

checkUsername();

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(event);
  const username = loginInput.value;

  paintGreetings(username);

  localStorage.setItem(USERNAME_KEY, username);
}
loginForm.addEventListener("submit", onLoginClick);
