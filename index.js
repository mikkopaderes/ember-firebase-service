'use strict';

const { map } = require('broccoli-stew');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  treeForVendor(defaultTree) {
    let browserVendorLib = new Funnel('node_modules', {
      destDir: 'fastboot-shims',
      files: ['firebase/firebase-app.js'],
    });

    browserVendorLib = map(browserVendorLib, content => (
      `if (typeof FastBoot === 'undefined') { ${content} }`
    ));

    return new MergeTrees([defaultTree, browserVendorLib]);
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/fastboot-shims/firebase/firebase-app.js');
    app.import('vendor/shims/firebase.js');
  },
};
