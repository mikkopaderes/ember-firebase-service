(function() {
  function vendorModule() {
    'use strict';

    if (window.FastBoot) {
      return {
        'default': FastBoot.require('firebase'),
        __esModule: true,
      };
    } else {
      return {
        'default': self['firebase'],
        __esModule: true,
      };
    }
  }

  define('firebase', [], vendorModule);
})();
