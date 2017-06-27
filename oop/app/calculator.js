import Display from '../app/display.js';
import SubDisplay from '../app/subdisplay.js';
import Button from '../app/button.js';

export default class Calculator {
    constructor() {
        this.firstValue = 0;
        this.secondValue = 0;
        this.operation = null;
        this.isCalculatedState = false;
        this.isOperationState = false;
        this.view = this.createView();
        this.subDisplay = this.createSubDisplay();
        this.display = this.createDisplay();
        this.buttons = this.createButtons();
        this.controls = this.createControls();
    }

    createView() {
        let view = document.createElement("div");
        view.className = "calculator";
        view.style.border = "2px solid";
        view.style.borderRadius = "2px";
        view.style.padding = "5px";
        view.style.display = "inline-block";
        return view;
    }

    createSubDisplay() {
        let subDisplay = new SubDisplay();
        this.view.appendChild(subDisplay.view);
        return subDisplay;
    }

    createDisplay() {
        let display = new Display();
        this.view.appendChild(document.createElement("br"));
        this.view.appendChild(display.view);
        return display;
    }

    createButtons() {
        let buttons = [
            new Button(0),
            new Button(1),
            new Button(2),
            new Button(3),
            new Button(4),
            new Button(5),
            new Button(6),
            new Button(7),
            new Button(8),
            new Button(9)
        ];
        this.view.appendChild(document.createElement("br"));
        buttons.forEach(button => {
            button.onClick = _ => this.addValue(button.value);
            this.view.appendChild(button.view);
        });
        return buttons;
    }

    createControls() {
        let controls = [
            new Button('CE'),
            new Button('-'),
            new Button('+'),
            new Button('*'),
            new Button('/'),
            new Button('=')
        ];
        this.view.appendChild(document.createElement("br"));
        controls.forEach(control => {
            control.onClick = _ => this.execOperation(control.value);
            this.view.appendChild(control.view);
        });
        return controls;
    }

    addValue(value) {
        if(this.isCalculatedState) {
            this.resetState();
        }
        this.isOperationState = false;
        this.display.add(value);
    }

    execOperation(operation) {
        switch(operation) {
            case "CE":
                this.resetState();
                break;
            case "=":
                if(this.operation) {
                    if(!this.secondValue) {
                        this.secondValue = this.display.getValue();
                    }
                    this.calculateCurrentState();
                }
                break;
            default:
                if(this.operation && !this.isOperationState) {
                    this.execOperation("=");
                }
                this.operation = operation;
                if(!this.isOperationState) {
                    this.isOperationState = true;
                    this.isCalculatedState = false;
                    this.firstValue = this.display.getValue();
                    this.secondValue = 0;
                    this.subDisplay.set(this.firstValue + this.operation);
                    this.display.reset();
                }
                break;
        }
    }

    calculateCurrentState() {
        switch(this.operation) {
            case "+":
                this.firstValue += this.secondValue;
                break;
            case "-":
                this.firstValue -= this.secondValue;
                break;
            case "*":
                this.firstValue *= this.secondValue;
                break;
            case "/":
                this.firstValue /= this.secondValue;
                break;
        }
        this.display.set(this.firstValue);
        this.subDisplay.set(this.operation + this.secondValue);
        this.isOperationState = false;
        this.isCalculatedState = true;
    }

    resetState() {
        this.isCalculatedState = false;
        this.isOperationState = false;
        this.operation = null;
        this.firstValue = 0;
        this.secondValue = 0;
        this.subDisplay.reset();
        this.display.reset();
    }
};