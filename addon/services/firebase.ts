import { getOwner } from '@ember/application';
import ApplicationInstance from '@ember/application/instance';
import { assert } from '@ember/debug';

import firebase from 'firebase/app';

export default {
  isServiceFactory: true,

  create(context: ApplicationInstance): firebase.app.App {
    const config = getOwner(context).resolveRegistration('config:environment');
    assert('Please set the `firebase` property in your environment config.', config && typeof config.firebase === 'object');

    let firebaseApp;

    try {
      firebaseApp = firebase.app();
    } catch (e) {
      firebaseApp = firebase.initializeApp(config.firebase);
    }

    return firebaseApp;
  },
};
