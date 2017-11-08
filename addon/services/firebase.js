import { getOwner } from '@ember/application';

import firebase from 'firebase';

export default {
  /**
   * @type {boolean}
   * @default
   * @readonly
   */
  isServiceFactory: true,

  /**
   * @param {Object} context
   * @return {Firebase} Initialized Firebase app
   */
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
