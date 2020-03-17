'use strict';

function windowHandler() {
    getApis();

    const addButton = new Button(seek('#app'), 'Add TODO');
    addButton.click(addTodoHandler);

    loadTodoList();
}

function addTodoHandler() {
    destroy('#crud-form-wrapper');
    const wrapper = new DOMElement('div', seek('#app'));
    wrapper.attr('id', 'crud-form-wrapper');
    new AddForm(wrapper.get());
    new Button(wrapper.get(), 'Apply').click(addConfirmedHandler);
    new Button(wrapper.get(), 'Close').click(closeButtonHandler);
}

function addConfirmedHandler() {
    const form = document.forms.crudForm;
    const todo = new Todo(
        form.id.value,
        form.task.value,
        form.priority.value,
        form.status.value,
        form.description.value,
        form.timestamp.value
    )
    
    if (isInputCorrect(form)) {
        addItemToLocalStorage('todos', todo);
        addItemToPageContent(todo);
        destroy('#crud-form-wrapper');
    }
}

function closeButtonHandler() {
    destroy('#crud-form-wrapper');
}

function actionsHandler(event) {
    const action = event.target.dataset.action;
    const itemId = event.target.dataset.id;

    switch (action) {
        case 'edit':
            destroy('#crud-form-wrapper');
            const wrapper = new DOMElement('div', seek('#app'));
            wrapper.attr('id', 'crud-form-wrapper');
            new EditForm(wrapper.get(), itemId);
            new Button(wrapper.get(), 'Apply').click(EditConfirmedHandler);
            new Button(wrapper.get(), 'Close').click(closeButtonHandler);
            break;
        case 'delete':
            deleteConfirmationCheck(event.target);
            break;
        case 'cancel':
            event.target.parentElement.remove();
            seek(`input[data-action="delete"][data-id="${itemId}"]`).hidden = false;
            break;
        case 'confirm':
            deleteItemFromLocalStorage('todos', itemId);
            deleteItemFromPage(itemId);
            break;
    }
}

function EditConfirmedHandler() {
    const form = document.forms.crudForm;
    const todo = new Todo(
        form.id.value,
        form.task.value,
        form.priority.value,
        form.status.value,
        form.description.value,
        form.timestamp.value
    )
    
    if (isInputCorrect(form)) {
        updateItemInLocalStorage('todos', todo);
        updateItemInPageContent(todo);
        destroy('#crud-form-wrapper');
    }
}