const passwordChars = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "@",".","_","%","$","#","+","-"
];

function generatePassword(length = 12) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[randomIndex];
  }
  return password;
}
function handleGenerateClick() {
  const passwordElements = document.querySelectorAll(".r-password");
  passwordElements.forEach(el => {
    el.textContent = generatePassword(14); // choose any length you like
  });
}
