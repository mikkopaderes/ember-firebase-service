(function() {
  function vendorModule() {
    'use strict';

    const firebase = typeof FastBoot === 'undefined'
      ? self['firebase']
      : FastBoot.require('firebase/compat/app');

    return { default: firebase, __esModule: true };
  }

  define('firebase/compat/app', [], vendorModule);
})();
