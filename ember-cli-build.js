'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  const app = new EmberAddon(defaults, {
    autoImport: {
      exclude: ['firebase']
    }
  });

  app.import('vendor/ember-firebase-service/firebase/firebase-app-compat.js');
  app.import('vendor/ember-firebase-service/firebase/firebase-firestore-compat.js');

  return app.toTree();
};
