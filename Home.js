var greetingDisplay = document.getElementById("greeting");

let d = new Date();
let t = d.getHours();

console.log(t);

if (t < 12) {
    greetingDisplay.innerHTML = "Good Morning!";
}

if (t > 12) {
    greetingDisplay.innerHTML = "Good Evening!";
}

