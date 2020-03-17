'use strict';

class Input extends DOMElement {
    constructor(parent, name, placeholder, value) {
        super('input', parent);

        this.element.setAttribute('type', 'text');
        this.element.setAttribute('name', name);
        this.element.setAttribute('placeholder', placeholder);
        if (value) {
            this.element.setAttribute('value', value);
        }
        this.element.classList.add('input-text');
    }
}