'use strict';

class EditForm extends Form {
    constructor(parent, itemId) {
        super(parent);

        this.todo = getItemFromLocalStorage('todos', itemId);

        // ID row
        this.idRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.idRow).HTML('ID');
        const idValueNest = new DOMElement('td', this.idRow).get();
        new Input(idValueNest, 'id', '', this.todo.id).get().disabled = true;

        // Task row
        this.taskRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.taskRow).HTML('Task');
        this.taskNest = new DOMElement('td', this.taskRow).get();
        new Select(this.taskNest, 'task', apis.tasks, this.todo.task).attr('id', 'select-task');

        // Priority row
        this.taskRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.taskRow).HTML('Priority');
        this.taskNest = new DOMElement('td', this.taskRow).get();
        new Select(this.taskNest, 'priority', apis.priorities, this.todo.priority).attr('id', 'select-priorities');

        // Status row
        this.taskRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.taskRow).HTML('Status');
        this.taskNest = new DOMElement('td', this.taskRow).get();
        new Select(this.taskNest, 'status', apis.statuses, this.todo.status).attr('id', 'select-statuses');

        //Description row
        this.taskRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.taskRow).HTML('Description');
        this.taskNest = new DOMElement('td', this.taskRow).get();
        if (this.todo.description === 'No description') {
            new Input(this.taskNest, 'description', this.todo.description);
        } else {
            new Input(this.taskNest, 'description', 'Task description', this.todo.description);
        }

        //Timestamp row
        this.timestampRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.timestampRow).HTML('Added');
        this.timestampRow = new DOMElement('td', this.timestampRow).get();
        new Input(this.timestampRow, 'timestamp', '', this.todo.timestamp).get().disabled = true;
    }
}