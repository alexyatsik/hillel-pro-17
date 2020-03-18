'use strict';

function windowHandler() {
    getApis();

    const addButton = new Button(seek('#app'), 'Add TODO');
    addButton.click(addTodoHandler);

    loadTodoList();
}

function addTodoHandler() {
    seek('#app').appendChild(
        new Modal(
            'modalWindowAdd', 
            'Add new item', 
            [
                closeButtonHandler, 
                addConfirmedHandler
            ]
        ).get());
    new AddForm(seek('#modalWindowAddContent'));
    $('#modalWindowAdd').modal('show');
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
        $('#modalWindowAdd').modal('hide');
        destroy('#modalWindowAdd');
    }
}

function closeButtonHandler() {
    destroy('#modalWindowEdit');
    destroy('#modalWindowAdd');
}

function actionsHandler(event) {
    const action = event.target.dataset.action;
    const itemId = event.target.dataset.id;

    switch (action) {
        case 'edit':
            seek('#app').appendChild(
                new Modal(
                    'modalWindowEdit', 
                    'Edit item', 
                    [
                        closeButtonHandler, 
                        EditConfirmedHandler
                    ]
                ).get());
            new EditForm(seek('#modalWindowEditContent'), itemId);
            $('#modalWindowEdit').modal('show');
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
        $('#modalWindowEdit').modal('hide');
        destroy('#modalWindowEdit');
    }
}