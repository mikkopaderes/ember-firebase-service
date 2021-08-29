declare var FastBoot: any;

export function initialize(): void {
  if (typeof FastBoot !== 'undefined') {
    FastBoot.require('firebase/compat/firestore');
  }
}

export default {
  initialize,
};
