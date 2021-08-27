import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

import FirebaseService from 'ember-firebase-service/services/firebase';

export default class Application extends Controller {
  @service
  declare private firebase: FirebaseService;

  @action
  public async createTestRecord() {
    const db = this.firebase.firestore();
    const record = await db.collection('users').add({ name: 'Test User' });

    console.log(record.id);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'application': Application;
  }
}
