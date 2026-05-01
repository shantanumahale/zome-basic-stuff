class BackboneModel {
    constructor (initialValues = {}) {
        this._attributes = new Map();
        Object.entries(initialValues).forEach(([attribute, value]) => {
            this._attributes.set(attribute, {
                value,
                events: {
                    change: [],
                    unset: []
                }
            })
        });
    }

    get(attribute) {
        return this._attributes.get(attribute)?.value;
    }
    set(attribute, value) {
        const attributeData = this.has(attribute) ? this._attributes.get(attribute) : {
            value,
            events: {
                change: [],
                unset: []
            }
        }

        if (attributeData.value !== value) {
            attributeData.events.change.forEach((callback) => {
                callback.fn.call(
                    callback.context ?? null,
                    attribute,
                    value,
                    attributeData.value
                )
            })
        }
        attributeData.value = value;
        this._attributes.set(attribute, attributeData);
    }
    has(attribute) {
        return this._attributes.has(attribute);
    }
    unset(attribute) {
        const attributeData = this._attributes.get(attribute);
        if (attributeData === null) return;
        attributeData.events.unset.forEach((callback) => {
            callback.fn.call(callback.context ?? null, attribute);
        });
        this._attributes.delete(attribute);
    }
    on(eventName, attribute, callback, context) {
        const attributeData = this._attributes.get(attribute);
        if (attributeData === null) return;
        attributeData.events[eventName].push({
            fn: callback,
            context,
        });
    }
    off(eventName, attribute, callback) {
        const attributeData = this._attributes.get(attribute);
        if (attributeData === null || attributeData === undefined) return;
        if (Object.hasOwn(attributeData, 'events')) {
            attributeData.events[eventName] = attributeData.events[eventName].filter(
                ({ fn }) => fn !== callback
            );
        }
        
    }
}

// Instantiate the BackboneModel.
const person = new BackboneModel({ name: 'John', age: 30 });

// Log initial values.
console.log(person.get('name')); // "John"
console.log(person.get('age')); // 30

// Set new values.
person.set('name', 'Jane');
person.set('age', 25);

// Log updated values.
console.log(person.get('name')); // "Jane"
console.log(person.get('age')); // 25

// Check if the model has a specific attribute.
console.log(person.has('name')); // true
console.log(person.has('gender')); // false

// Unset an attribute.
person.unset('age');
console.log(person.get('age')); // undefined

function nameChangeCallback(attribute, newName, oldName) {
  console.log(`'${attribute}' changed from '${newName}' to '${oldName}'`);
}
// Register an event listener for a change in the `name` field.
person.on('change', 'name', nameChangeCallback);

// Trigger the 'change' event for the 'name' attribute.
person.set('name', 'Bob');
// > "'name' changed from 'Jane' to 'Bob'"

// Remove an event listener for the 'name' attribute.
person.off('name', nameChangeCallback);

// Trigger the 'change' event again.
person.set('name', 'Alice');
// No output because the listener was removed.