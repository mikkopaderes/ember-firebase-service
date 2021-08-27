/* eslint @typescript-eslint/no-empty-interface: 'off' */

import firebase from 'firebase/compat/app';

interface FirebaseInterface extends firebase.app.App {}

declare module 'ember-firebase-service/services/firebase' {
  export default interface FirebaseService extends FirebaseInterface {}
}

declare module '@ember/service' {
  interface Registry {
    'firebase': FirebaseInterface;
  }
}
