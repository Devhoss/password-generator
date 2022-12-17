let passwdEl = document.querySelectorAll(".passwd");

function generatePassword() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const logograms = "#$%&@^`~";
  const mathSymbols = "<*+!?=";

  let characters = uppercase + lowercase + numbers + logograms + mathSymbols;
  characters = characters.split("");

  let password = "";
  let passwordLength = 16;

  for (let i = 0; i < passwordLength; i++) {
    let randomPassword = Math.floor(Math.random() * characters.length);
    password += characters[randomPassword];
  }
  return password;
}

function generatePasswords() {
  let passwords = [];
  for (let i = 0; i < passwdEl.length; i++) {
    const password = generatePassword();
    passwords.push(password);
  }
  for (let i = 0; i < passwords.length; i++) {
    passwdEl[i].textContent = passwords[i];
  }
}

genBtn.addEventListener("click", generatePasswords);
