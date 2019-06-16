'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/firebase/firebase-app.js');
    app.import('vendor/shims/firebase.js');
  },
};
