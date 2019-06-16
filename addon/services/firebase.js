import { getOwner } from '@ember/application';

import firebase from 'firebase';

export default {
  isServiceFactory: true,

  create(context) {
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
