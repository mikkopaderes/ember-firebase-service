ember-firebase-service
==============================================================================

Exposes a service that's a direct representation of Firebase.

*Versioning will be aligned with Firebase's MAJOR version. For example, if you want to use Firebase v4.x.x, you would need to depend on the ^4.0.0 version of this addon.*

Installation
------------------------------------------------------------------------------

```
ember install ember-firebase-service
```

### Configuration

Add your Firebase configuration in your app's `config/environment.js`.

```javascript
let ENV = {
  ...

  firebase: {
    apiKey: '<api_key>',
    authDomain: '<auth_domain>',
    databaseURL: '<database_url>',
    projectId: '<project_id>',
    storageBucket: '<storage_bucket>',
    messagingSenderId: '<messaging_sender_id>'
  },

  ...
}
```

Usage
------------------------------------------------------------------------------

Inject the `firebase` service and use it as you would use Firebase normally.

```javascript
import { inject } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  firebase: inject(),

  init(...args) {
    this._super(...args);

    this.get('firebase').auth().signInWithEmailAndPassword('foo', 'bar');
  }
});
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-firebase-service`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
