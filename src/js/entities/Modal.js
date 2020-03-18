'use strict';

class Modal {
    constructor(modalId, title, content) {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal', 'fade');
        this.modal.setAttribute('id', modalId);
        this.modal.setAttribute('tabindex', '-1');
        this.modal.setAttribute('role', 'dialog');
        this.modal.setAttribute('aria-labelledby', `${modalId}Label`);
        this.modal.setAttribute('aria-hidden', true);
        this.modal.dataset.backdrop = 'static';

        const modalDialog = new DOMElement('div', this.modal);
        modalDialog.addClass('modal-dialog');
        modalDialog.attr('role', 'document');

        const modalContent = new DOMElement('div', modalDialog.get());
        modalContent.addClass('modal-content');

        const modalHeader = new DOMElement('div', modalContent.get());
        modalHeader.addClass('modal-header');

        const h5 = new DOMElement('h5', modalHeader.get());
        h5.addClass('modal-title');
        h5.attr('id', `${modalId}Label`);

        const headerCloseButton = new DOMElement('button', modalHeader.get());
        headerCloseButton.addClass('close');
        headerCloseButton.attr('type', 'button');
        headerCloseButton.attr('aria-label', 'Close');
        headerCloseButton.attr('data-dismiss', 'modal');
        headerCloseButton.HTML(`<span aria-hidden="true">&times;</span>`);

        const modalBody = new DOMElement('div', modalContent.get());
        modalBody.addClass('modal-body');
        
        const modalFooter = new DOMElement('div', modalContent.get());
        modalFooter.addClass('modal-footer');

        const close = new DOMElement('button', modalFooter.get());
        close.addClass('btn', 'btn-secondary');
        close.attr('type', 'button');
        close.attr('data-dismiss', 'modal');
        const apply = new DOMElement('button', modalFooter.get());
        apply.addClass('btn', 'btn-primary');
        apply.attr('type', 'button');

        h5.HTML(title);
        modalBody.HTML(content);
        close.HTML('Close');
        apply.HTML('Apply');
    }

    get() {
        return this.modal;
    }
}