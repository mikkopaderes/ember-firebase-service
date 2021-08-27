import ApplicationInstance from '@ember/application/instance';

export function initialize(appInstance: ApplicationInstance): void {
  const firebase = appInstance.lookup('service:firebase');
  const db = firebase.firestore();

  db.useEmulator('localhost', 8080);
}

export default {
  initialize,
};
