class EventEmitter {
    constructor () {
        this.events = Object.create(null);
    }
    on (eventName, listener) {
        if (!Object.hasOwn(this.events, eventName)) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
        return this;
    }
    off (eventName, listener) {
        if (!Object.hasOwn(this.events, eventName)) return this;
        const listeners = this.events[eventName];
        const index = listeners.findIndex((lstnr) => lstnr === listener);
        if (index < 0) return this;
        this.events[eventName].splice(index, 1);
        return this;
    }
    emit (eventName, ...args) {
        if (!Object.hasOwn(this.events, eventName) || this.events[eventName].length === 0) return false;
        const listeners = this.events[eventName].slice();
        listeners.forEach(listener => {
            listener.apply(null, args);
        });
        return true;
    }
}


const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}
emitter.on('foo', addTwoNumbers);
emitter.emit('foo', 2, 5);
// > "The sum is 7"

emitter.on('foo', (a, b) => console.log(`The product is ${a * b}`));
emitter.emit('foo', 4, 5);
// > "The sum is 9"
// > "The product is 20"

emitter.off('foo', addTwoNumbers);
emitter.emit('foo', -3, 9);
// > "The product is -27"