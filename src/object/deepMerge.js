/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}

export function deepClone(obj) {
  if (obj == null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    const out = [];
    for (const v of obj) {
      if (v != null && typeof v === "object") {
        out.push(deepClone(v));
      } else {
        out.push(v);
      }
    }
    return out;
  }
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v != null && typeof v === "object") {
      out[k] = deepClone(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

export function deepMerge(a, b) {
  let out = deepClone(a);
  if (a == null && typeof b == "object") {
    return deepClone(b);
  }
  for (const [k, v] of Object.entries(b)) {
    if (v != null && typeof v === "object") {
      out[k] = deepMerge(out[k], v);
    } else {
      out[k] = v;
    }
  }
  return out;
}
