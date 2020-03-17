'use strict';

class ActionBar extends DOMElement {
    constructor(parent, itemId, buttonsValues) {
        super('div', parent);

        this.itemId = itemId;
        this.addClass('action-bar');

        for (let i = 0; i < buttonsValues.length; i++) {
            this.createButton(buttonsValues[i]);
        }
    }

    createButton(value) {
        const button = new Button(this.element, value).get();
        button.dataset.action = value.toLowerCase();
        button.dataset.id = this.itemId;
    }
}