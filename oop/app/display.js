export default class Display {
    constructor() {
        this.view = this.createView();
    }

    add(value) {
        if(this.view.value === "0") {
            this.view.value = value;
        } else if(this.view.value.length < 10) {
            this.view.value += value;
        }
    }

    set(value) {
        this.view.value = value;
    }

    reset() {
        this.view.value = "0";
    }

    getValue() {
        return parseInt(this.view.value);
    }

    createView() {
        let view = document.createElement("input");
        view.type = "text";
        view.className = "display";
        view.value = "0";
        view.disabled = "true";
        view.style.padding = "5px";
        view.style.fontSize = "24px";
        return view;
    }
};