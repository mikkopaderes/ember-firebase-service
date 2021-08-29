import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

import FirebaseService from 'ember-firebase-service/services/firebase';

export default class Application extends Route {
  @service
  declare private firebase: FirebaseService;

  public async model(): Promise<string> {
    const db = this.firebase.firestore();
    const record = await db.collection('users').add({ name: 'Test User' });

    return record.id;
  }
}
