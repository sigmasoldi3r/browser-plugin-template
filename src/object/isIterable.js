/**
 * @template {*} T
 * @param {unknown} value
 * @returns {value is Iterable<T>}}
 */
export function isIterable(value) {
  return Symbol.iterator in value;
}
