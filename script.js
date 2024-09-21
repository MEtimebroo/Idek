const btnElement = document.getElementById("btn");
const btnElement1 = document.getElementById("btn1");
const btnElement2 = document.getElementById("btn2");
const btnElement3 = document.getElementById("btn7");
const menu = document.createElement("div");
const contentDiv = document.createElement("div");
const buttonContainer = document.createElement("div");
const input = document.createElement("input");
const input1 = document.createElement("input");
const button = document.createElement("button");
const button1 = document.createElement("button");
const a = document.createElement("a");
const user = document.getElementById("user");
const img = document.getElementById("img");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

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
    const main = document.getElementById("main");

    main.appendChild(menu);
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
    menu.style.marginTop = "90px";
    input.required;

    button.addEventListener("click", function() {
        menu.style.display = "none";
    });

    button1.addEventListener("click", function() {
        if (input.value == "Pyrex45" && input1.value == "password") {
            contentDiv.appendChild(user);
            user.style.display = "block";
            a.remove();
            input.remove();
            input1.remove();
            button1.remove();
            menu.style.display = "none";
            buttonContainer.style.marginTop = "80px";
            menu.innerText = "Pyrex45"
        }
    })

    if (user.style.display == "block") {
        a.remove();
        input.remove();
        input1.remove();
        button1.remove()
    }
}

function page2() {
    img.setAttribute("src", "unknown");
}