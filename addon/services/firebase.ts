import { getOwner } from '@ember/application';
import ApplicationInstance from '@ember/application/instance';

import firebase from 'firebase';

export default {
  isServiceFactory: true,

  create(context: ApplicationInstance): firebase.app.App {
    const config = getOwner(context).resolveRegistration('config:environment');
    let firebaseApp;

    try {
      firebaseApp = firebase.app();
    } catch (e) {
      firebaseApp = firebase.initializeApp(config.firebase);
    }

    return firebaseApp;
  },
};
