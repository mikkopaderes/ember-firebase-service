# ember-firebase-service

This addon exposes a service that's a direct representation of Firebase.

## Installation

Download the addon by running this command:

```bash
ember install ember-firebase-service
```

## Configuration

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

## Usage

Inject the `firebase` service and use it as you would use Firebase normally.

```javascript
import { inject } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  firebase: inject(),

  init(...args) {
    this._super(args);

    this.get('firebase').auth().signInWithEmailAndPassword('foo', 'bar');
  }
});
```

## Versioning

Versioning will be aligned with Firebase's MAJOR version. For example, if you want to use Firebase v4.6.1, you would need to depend on the ^4.0.0 version of this addon.

## Developing

### Installation

* `git clone <repository-url>` this repository
* `cd ember-firebase-service`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
