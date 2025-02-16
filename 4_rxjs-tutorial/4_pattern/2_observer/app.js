function Click() {
    this.listeners = [];  // observers
}

Click.prototype = {

    subscribe: function (fn) {
        this.listeners.push(fn);
    },

    fire: function (o) {
        this.listeners.forEach(function (item) {
            item(o);
        });
    }
}

var clickHandler = function (item) {
    console.log("Fired: " + item);
};

var click = new Click();

click.subscribe(clickHandler);
click.fire('event #1');
click.fire('event #2');
click.subscribe(clickHandler);
click.fire('event #3');

