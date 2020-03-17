'use strict';

function loadTodoList() {
    destroy('#todosList');
    const list = new TodoList(seek('#app'));
    const todosList = getLocalStorage('todos');
    for (let i = 0; i < todosList.length; i++) {
        Object.setPrototypeOf(todosList[i], new Todo);
        list.addTodo(todosList[i]);
    }
    list.fillList();
}

function isInputCorrect(form) {
    let flag = true;

    const tasks = seek('#select-task');
    const priorities = seek('#select-priorities');
    const statuses = seek('#select-statuses');
    let errorSelects = document.getElementsByClassName('error-message');

    tasks.classList.remove('error-block');
    priorities.classList.remove('error-block');
    statuses.classList.remove('error-block');
    for (let i = 0; i < errorSelects.length; i++) {
        errorSelects[i].remove();
    }

    if (form.task.value === '0') {
        tasks.classList.add('error-block');
        flag = false;
    }
    if (form.priority.value === '0') {
        priorities.classList.add('error-block');
        flag = false;
    }
    if (form.status.value === '0') {
        statuses.classList.add('error-block');
        flag = false;
    }

    errorSelects = document.getElementsByClassName('error-block');

    for (let i = 0; i < errorSelects.length; i++) {
        const message = new DOMElement('span', errorSelects[i]);
        message.addClass('error-message');
        message.HTML('Incorrect input');
    }

    return flag;
}

function getApis() {
    fetch('src/js/data.json')
        .then(res => {
            return res.json();
        })
        .then(res => {
            apis = res;
        })
        .then(() => {
            checkApis();
        })
        .then(() => {
            loadTodoList();
        })
        .catch(err => {
            console.log('rejected', err);
        })
}

function checkApis() {
    const db = getLocalStorage('todos');

    for (let i = 0; i < db.length; i++) {
        const current = db[i];
        let isCurrentApiExists = false;
        // check statuses
        for (let k = 0; k < apis.statuses.length; k++) {
            if (current.status === apis.statuses[k].value) {
                isCurrentApiExists = true;
                break;
            }
        }
        if (!isCurrentApiExists) {
            db[i].status = 'Not defined';
        }
        // check priorities
        isCurrentApiExists = false;
        for (let k = 0; k < apis.priorities.length; k++) {
            if (current.priority === apis.priorities[k].value) {
                isCurrentApiExists = true;
                break;
            }
        }
        if (!isCurrentApiExists) {
            db[i].priority = 'Not defined';
        }
        // check tasks
        isCurrentApiExists = false;
        for (let k = 0; k < apis.tasks.length; k++) {
            if (current.task === apis.tasks[k].value) {
                isCurrentApiExists = true;
                break;
            }
        }
        if (!isCurrentApiExists) {
            db[i].task = 'Not defined';
        }
    }

    localStorage.setItem('todos', JSON.stringify(db));
}

function addItemToPageContent(todoObj) {
    seek('#todosList').appendChild(todoObj.get());
}

function updateItemInPageContent(todoObj) {
    const target = document.querySelector(`#todosList > [data-id="${todoObj.id}"]`);
    seek('#todosList').replaceChild(todoObj.get(), target);
}

function deleteItemFromPage(itemId) {
    document.querySelector(`tr[data-id="${itemId}"]`).remove();
}

function deleteConfirmationCheck(deleteButton) {
    deleteButton.hidden = true;
    new ActionBar(
        deleteButton.parentElement, 
        deleteButton.dataset.id, 
        ['Confirm', 'Cancel']
    );
}