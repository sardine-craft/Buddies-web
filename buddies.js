

function Home() {
    document.getElementById("title").innerHTML = "Home.";

}

function rules() {
    document.getElementById("title").innerHTML = "The Rules.";

}

function member() {
    document.getElementById("title").innerHTML = "The Club!";

}

function hide() {
    document.getElementByClassName("group").style.display = "none";
}

function start() {
    document.getElementById("start").style.opacity = "100%";
}

window.onload = start();

