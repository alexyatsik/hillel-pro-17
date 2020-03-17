'use strict';

class Button extends DOMElement {
    constructor(parent, value) {
        super('input', parent);

        this.value;

        this.element.setAttribute('type', 'button');
        this.element.setAttribute('value', value);
        this.element.classList.add('input-button');
    }
}