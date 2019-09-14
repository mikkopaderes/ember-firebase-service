declare module 'ember-firebase-service/services/firebase' {
  import firebase from 'firebase';

  export default interface FirebaseService extends firebase.app.App {}
}
