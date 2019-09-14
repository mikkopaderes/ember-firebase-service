ember-firebase-service
==============================================================================

Exposes a service that's a direct representation of Firebase.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
npm install firebase@6.x --save-dev
ember install ember-firebase-service
```

*Versioning will be aligned with Firebase's MAJOR version. For example, if you want to use Firebase v4.x, you would need to depend on the v4.x of this addon.*

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

Import the Firebase features that you need in your app's `ember-cli-build.js`.

```javascript
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    ...
  });

  ...

  app.import('node_modules/firebase/firebase-auth.js');
  app.import('node_modules/firebase/firebase-firestore.js');

  return app.toTree();
};
```

> You don't need to import `firebase-app.js` as it's automatically done for you

Usage
------------------------------------------------------------------------------

Inject the `firebase` service and use it as you would use Firebase normally.

```javascript
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  firebase: service(),

  init(...args) {
    this._super(...args);

    this.firebase.auth().signInWithEmailAndPassword('foo', 'bar');
  }
});
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
