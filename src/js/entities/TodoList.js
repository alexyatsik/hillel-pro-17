'use strict';

class TodoList extends DOMElement{
    constructor(parent) {
        super('table', parent);
        this.todos = [];

        this.attr('id', 'todosList');

        this.header();

        this.click(actionsHandler);
    }

    addTodo() {
        for (let i = 0; i < arguments.length; i++) {
            this.todos.push(arguments[i]);
        }
    }

    getTodosList() {
        return this.todos.slice();
    }

    header() {
        const tr = new DOMElement('tr', this.element);
        new DOMElement('th', tr.get()).HTML('Task');
        new DOMElement('th', tr.get()).HTML('Priority');
        new DOMElement('th', tr.get()).HTML('Status');
        new DOMElement('th', tr.get()).HTML('Description');
        new DOMElement('th', tr.get()).HTML('Added');
        new DOMElement('th', tr.get()).HTML('Actions');
    }

    fillList() {
        this.HTML('');
        this.header();
        for (let i = 0; i < this.todos.length; i++) {
            this.element.appendChild(this.todos[i].get());
        }
    }

    sort() {
        
    }
}