'use strict';

class Select extends DOMElement {
    constructor(parent, name, collection, coverOption) {
        super('select', parent);

        this.attr('name', name);

        this.coverOption = new DOMElement('option', this.element);
        if (!coverOption || coverOption === 'Not defined') {
            this.coverOption.attr('value', '0');
            this.coverOption.HTML('Not defined');
        } else {
            this.coverOption.attr('value', coverOption);
            this.coverOption.HTML(coverOption);
        }
        for (let i = 0; i < collection.length; i++) {
            if (coverOption === collection[i].value) {
                continue;
            }
            const option = new DOMElement('option', this.element);
            option.HTML(collection[i].value);
            option.attr('value', collection[i].value);
        }
    }
}