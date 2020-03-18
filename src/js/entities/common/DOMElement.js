'use strict';

class DOMElement {
    constructor(tag, parent) {
        this.element = document.createElement(tag);
        parent.appendChild(this.element);
    }

    addClass() {
        this.element.classList.add(...arguments);

        return this.element;
    }

    removeClass() {
        this.element.classList.remove(...arguments);

        return this.element;
    }

    click(handler) {
        this.element.addEventListener('click', handler, event);

        return this.element;
    }

    HTML(value) {
        this.element.innerHTML = value;

        return this.element;
    }

    attr(name, value) {
        this.element.setAttribute(name, value);

        return this.element;
    }

    get() {
        return this.element;
    }
}