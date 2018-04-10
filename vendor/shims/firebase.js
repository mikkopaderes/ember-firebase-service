(function() {
  function vendorModule() {
    'use strict';

    if (typeof FastBoot === 'undefined') {
      return {
        'default': self['firebase'],
        __esModule: true,
      };
    } else {
      return {
        'default': FastBoot.require('firebase'),
        __esModule: true,
      };
    }
  }

  define('firebase', [], vendorModule);
})();
