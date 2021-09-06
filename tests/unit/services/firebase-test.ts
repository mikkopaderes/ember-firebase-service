import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | firebase', function (hooks) {
  setupTest(hooks);

  module('initialization', function () {
    test('should expose Firebase as a service', function (assert) {
      assert.expect(1);

      // Arrange
      this.owner.register('config:environment', {
        firebase: {
          apiKey: '<api_key>',
          authDomain: '<auth_domain>',
          databaseURL: '<database_url>',
          projectId: '<project_id>',
          storageBucket: '<storage_bucket>',
          messagingSenderId: '<messaging_sender_id>',
        }
      });

      // Act
      const result = this.owner.lookup('service:firebase');

      // Assert
      assert.equal(result.name, '[DEFAULT]');
    });

    test('throws an error if the firebase config is not present', function (assert) {
      assert.expect(1);
 
      // Arrange
      this.owner.register('config:environment', {
        firebase: null
      });

      // Act
      const result = this.owner.lookup('service:firebase');

      // Assert
      assert.throws('an error is thrown if no config is present');
   });
  });
});
