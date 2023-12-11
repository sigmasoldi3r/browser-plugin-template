/**
 * @param {unknown} msg
 * @returns {import("./types").Result<ReturnType<JSON['parse']>, SyntaxError>}
 */
export function jsonParse(msg) {
  try {
    const value = JSON.parse(msg);
    return {
      isErr: false,
      isOk: true,
      value,
      unwrap() {
        return this.value;
      },
    };
  } catch (error) {
    return {
      isErr: true,
      isOk: false,
      error,
      unwrap() {
        throw this.error;
      },
    };
  }
}
