const btnElement = document.querySelector("#btn");
const btnElement1 = document.querySelector("#btn1");
const btnElement2 = document.querySelector("#btn2");
const btnElement3 = document.querySelector("#btn7");
const menu = document.createElement("div");
const contentDiv = document.createElement("div");
const buttonContainer = document.createElement("div");
const input = document.createElement("input");
const input1 = document.createElement("input");
const button = document.createElement("button");
const button1 = document.createElement("button");
const a = document.createElement("a");
const body = document.querySelector("body");

a.classList.add("overlay-a");
a.href = "https://github.com/MEtimebroo/";
a.textContent = "No account? Sign Up!"

contentDiv.classList.add("overlay-content");

buttonContainer.classList.add("button-container");

input1.classList.add("overlay-input");
input1.placeholder = "Password:";
input1.type = "password";

input.classList.add("overlay-input");
input.placeholder = "Username:"

button.textContent = "Close";
button.classList.add("overlay-button");
button.id = "btn9";

button1.classList.add("overlay-button");
button1.textContent = "Log In";
button.id = "btn10";

menu.innerText = "Sign In";
menu.style.border = "1px solid red";
menu.style.padding = "10px";
menu.style = "background-color: gray";
menu.classList.add("overlay-div");
menu.classList.add("slide-down");

btnElement.addEventListener("click", () => {
    location.href = "https://github.com/MEtimebroo/";
})

btnElement1.addEventListener("click", () => {
    location.href = "https://github.com/MEtimebroo/";
})

btnElement2.addEventListener("click", () => {
    location.href = "https://github.com/MEtimebroo/";
})

function createMenu() {
    document.body.appendChild(menu);
    menu.appendChild(contentDiv);
    contentDiv.appendChild(input);
    contentDiv.appendChild(input1);
    buttonContainer.appendChild(button);
    buttonContainer.appendChild(button1);
    contentDiv.appendChild(buttonContainer);
    contentDiv.appendChild(a);
    a.style.display = "block";
    button1.style.display = "block";
    input1.style.display = "block";
    input.style.display = "block";
    button.style.display = "block";
    menu.style.display = "block";
    menu.classList.add("slide-down");

    button.addEventListener("click", function() {
        menu.style.display = "none";
    });
}

function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || navigator.opera;

    if (/android/i.test(userAgent) || /iPhone|iPod/.test(userAgent) && !window.MSStream) {
        body.style.display = "block";
        body.style.removeProperty("justify-content");
        body.style.removeProperty("align-items");
    }
}

detectDevice();
