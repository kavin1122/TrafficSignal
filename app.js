var redLight = document.getElementById("red");
var yellowLight = document.getElementById("yellow");
var greenLight = document.getElementById("green");
function resetLights() {
    redLight.classList.remove("red");
    yellowLight.classList.remove("yellow");
    greenLight.classList.remove("green");
}
function red() {
    resetLights();
    redLight.classList.add("red");
}
function yellow() {
    resetLights();
    yellowLight.classList.add("yellow");
}
function green() {
    resetLights();
    greenLight.classList.add("green");
}