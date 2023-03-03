import Debug from 'debug';

const debug = Debug('util:splitName');

export function splitName(
  fullName: string,
  type: 'resource' | 'type',
): [ns: string, name: string] {
  let ret: [string, string];

  const index = fullName.indexOf('.');
  if (index < 0) {
    if (type === 'resource') {
      ret = [fullName, fullName];
    } else {
      ret = ['', fullName];
    }
  } else {
    ret = [fullName.slice(0, index), fullName.slice(index + 1)];
  }
  debug(`%s (%s) = %o`, fullName, type, ret);
  return ret;
}
