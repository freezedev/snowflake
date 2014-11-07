import * as mixedice from 'mixedice';
import * as EventMap from 'eventmap';

class Model {
  constructor() {
    // Mix in `EventMap` into all `Model` instances
    mixedice([this, Model.prototype], new EventMap());

    // Store attribute data
    this.data = {};
  }

  get() {
    // Get an attribute if it exists
    if (Object.hasOwnProperty.call(this.data, name)) {
      return this.data[name];
    }
  }

  set(name, value) {
    // Set or add an attribute
    this.data[name] = value;
    // Trigger the `change` event with `name` and `value` as its parameters
    this.trigger('change', name, value);
  }
}
