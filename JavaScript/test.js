let count = 0;
console.log("Hello World" + count);
let countEL = document.getElementById("count-el");
function increment() {
    count += 1;
    countEL.innerText = count;
}
function save() {
   console.log("Count saved: " + count);
   var saveEL = document.getElementById("save-el");
   saveEL.textContent += count + " - ";
   count = 0;
   countEL .textContent = count;  
}

function addText() {
    var welocme = document.getElementById("welcome-el");
    welocme.textContent = "Have a nice day!";
}
