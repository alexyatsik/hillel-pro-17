'use strict';

class AddForm extends Form {
    constructor(parent) {
        super(parent);

        // ID row
        this.idRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.idRow).HTML('ID');
        const idValueNest = new DOMElement('td', this.idRow).get();
        new Input(idValueNest, 'id', '', getUniqueId()).get().disabled = true;

        // Task row
        this.taskRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.taskRow).HTML('Task');
        this.taskNest = new DOMElement('td', this.taskRow).get();
        new Select(this.taskNest, 'task', apis.tasks).attr('id', 'select-task');

        // Priority row
        this.taskRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.taskRow).HTML('Priority');
        this.taskNest = new DOMElement('td', this.taskRow).get();
        new Select(this.taskNest, 'priority', apis.priorities).attr('id', 'select-priorities');

        // Status row
        this.taskRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.taskRow).HTML('Status');
        this.taskNest = new DOMElement('td', this.taskRow).get();
        new Select(this.taskNest, 'status', apis.statuses).attr('id', 'select-statuses');

        //Description row
        this.taskRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.taskRow).HTML('Description');
        this.taskNest = new DOMElement('td', this.taskRow).get();
        new Input(this.taskNest, 'description', 'Task description');

        //Timestamp row
        this.timestampRow = new DOMElement('tr', this.table).get();
        new DOMElement('th', this.timestampRow).HTML('Added');
        this.timestampRow = new DOMElement('td', this.timestampRow).get();
        new Input(this.timestampRow, 'timestamp', '', moment().format('Do MMM, h:mm a')).get().disabled = true;
    }
}