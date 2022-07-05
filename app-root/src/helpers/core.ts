import { LoadableApp, loadMicroApp } from 'qiankun';
import { ObjectType } from 'qiankun/es/interfaces';

export function loadSubApp<T extends ObjectType>(app: LoadableApp<T>) {
  return loadMicroApp(app, {
    getPublicPath: entry => {
      if (typeof entry === 'string') {
        return `${new URL(entry, new URL(window.location.href)).origin}/`;
      } else if (typeof entry?.scripts?.[0] === 'string') {
        return `${new URL(entry.scripts[0], new URL(window.location.href)).origin}/`;
      }
      return `${window.location.origin}/`;
    },
  });
}
