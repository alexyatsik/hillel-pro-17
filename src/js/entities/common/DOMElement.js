'use strict';

class DOMElement {
    constructor(tag, parent) {
        this.element = document.createElement(tag);
        parent.appendChild(this.element);
    }

    addClass() {
        this.element.classList.add(...arguments);
    }

    removeClass() {
        this.element.classList.remove(...arguments);
    }

    click(handler) {
        this.element.addEventListener('click', handler, event);
    }

    HTML(value) {
        this.element.innerHTML = value;
    }

    attr(name, value) {
        this.element.setAttribute(name, value);
    }

    get() {
        return this.element;
    }
}