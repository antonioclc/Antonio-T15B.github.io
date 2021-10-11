const email = document.getElementById('email');
const password = document.getElementById('password');
const loginButton = document.getElementById('entrar');
const sendButton = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function login() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function agreement() {
  if (checkbox.checked === true) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

function counterTexteArea() {
  const cont = 500 - textArea.value.length;
  contador.innerText = cont;
}

loginButton.addEventListener('click', login);
checkbox.addEventListener('click', agreement);
textArea.addEventListener('keyup', counterTexteArea);
