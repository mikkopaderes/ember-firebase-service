ember-firebase-service
==============================================================================

Exposes a service that's a direct representation of Firebase.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above
* Firebase v9 or above


Versioning
------------------------------------------------------------------------------

* MAJOR version will be bumped whenever Firebase actually breaks this addon
* PATCH version will be bumped whenever Firebase releases a new MAJOR version that doesn't break this addon. In this case, the update will simply be to bump the `peerDependencies` to include that new MAJOR version.


Installation
------------------------------------------------------------------------------

This addon requires `firebase`. Install the correct version of it which is listed by the command:

```
npm info ember-firebase-service peerDependencies
```

Once you've installed it, you can now install the addon itself:

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

In your `ember-cli-build.js`, there's 2 things that you need to do:

1. Set the exclusion of `'firebase'` in the `ember-auto-import` settings. This is because `firebase` package is already included as a shim in this addon.
2. Import the Firebase products that you need in your app's `ember-cli-build.js` using the format of `vendor/ember-firebase-service/firebase/firebase-<product>.js`. Note that you don't need to import `firebase-app.js` as it's automatically done for you.

```javascript
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      exclude: ['firebase']
    }
  });

  ...

  app.import('vendor/ember-firebase-service/firebase/firebase-auth.js');
  app.import('vendor/ember-firebase-service/firebase/firebase-firestore.js');

  return app.toTree();
};
```

#### FastBoot

The Firebase products that you included in your `ember-cli-build.js` are already transformed to not run in FastBoot. This is because Firebase requires different modules when running under Node.js as opposed to the browser. To use the Node.js modules, create a FastBoot-only initializer and import it from there.

```javascript
export function initialize() {
  if (typeof FastBoot !== 'undefined') {
    FastBoot.require('firebase/auth');
    FastBoot.require('firebase/firestore');
  }
}

export default {
  initialize
};
```

Usage
------------------------------------------------------------------------------

Inject the `firebase` service and use it as you would use Firebase normally.

```javascript
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default class MyComponent extends Component {
  @service firebase;

  signIn() {
    this.firebase.auth().signInWithEmailAndPassword('foo', 'bar');
  }
}
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
