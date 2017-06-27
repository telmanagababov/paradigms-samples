import Calculator from "../app/calculator.js";

window.onload = _ => {
    let calculator = new Calculator(),
        contentElement = document.querySelector("#content");
    contentElement.appendChild(calculator.view); 
}