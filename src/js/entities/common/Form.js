'use strict';

class Form extends DOMElement {
    constructor(parent) {
        super('form', parent);

        this.attr('id', 'crudForm');

        this.table = new DOMElement('table', this.element).get();
    }
}