export default class SubDisplay {
    constructor() {
        this.view = this.createView();
    }

    set(value) {
        this.view.value = value;
    }

    reset() {
        this.view.value = "";
    }

    createView() {
        let view = document.createElement("input");
        view.type = "text";
        view.className = "sub-display";
        view.value = "";
        view.disabled = "true";
        view.style.padding = "4px";
        view.style.fontSize = "16px";
        view.style.color = "#888";
        view.style.border = "none";
        view.style.background = "none";
        return view;
    }
};