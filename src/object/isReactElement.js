const VALID_TYPE = {
  function: true,
  object: true,
  string: true,
};

/**
 * @param {unknown} element
 * @returns {element is import("react").ReactElement}
 */
export function isReactElement(element) {
  if (element == null) return false;
  if (typeof element != "object") return false;
  return (
    "type" in element && typeof element.type in VALID_TYPE && "props" in element
  );
}
