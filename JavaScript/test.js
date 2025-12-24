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


// Object Destructuring
const movie = {
    title : "Inception",
    director : "Christopher Nolan",
    year : 2010,
    rating : 8.8,
    genre : "Sci-Fi",
}

const {title, director, year, rating, genre} = movie;

// Destructuring let's you write dry code.
console.log(title);      // Inception
console.log(director);   // Christopher Nolan
console.log(year);       // 2010
console.log(rating);     // 8.8
console.log(genre);      // Sci-Fi

function displayTraffficLight(light){
    console.log(light);
}
displayTraffficLight("Red");
setTimeout(displayTraffficLight, 2000, "Yellow");
setTimeout(displayTraffficLight, 4000, "Green");
