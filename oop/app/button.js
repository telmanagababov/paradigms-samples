export default class Button {
    constructor(value) {
        this.value = value;
        this.view = this.createView(value);
        this.onClick = null;
    }

    createView(value) {
        let button = document.createElement("button");
        button.onclick = _ => this.onClick && this.onClick(this.value);
        button.value = value;
        button.innerHTML = value;
        button.className = "button";
        button.style.padding = "10px";
        button.style.borderRadius = "4px";
        return button;
    }
}