export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Pick<Required<T>, K>;

export function hasProperty<T extends object, K extends keyof T>(
  obj: T | RequiredBy<T, K>,
  ...keys: K[]
): obj is RequiredBy<T, K> {
  return !keys.some((x) => !obj[x]);
}

export function assert(
  condition: unknown,
  message = 'assertion fialed',
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
