const DEBUG_STYLE = "color: gray;";
const INFO_STYLE =
  "color: rgba(128, 143, 255, 0.49); border: 1px solid blue; padding: 8px; border-radius: 4px;";
const WARN_STYLE =
  "background-color: rgba(245, 189, 39, 0.49); color: white; border: 2px solid gold; padding: 0.2rem 0.4rem;";
const ERROR_STYLE =
  "background-color: rgba(255, 87, 87, 0.42); color: white; border: 2px solid red; font-size: 0.9rem; padding: 0.5rem 1rem";
const PANIC_STYLE =
  "background-color: black; color: red; border: 4px solid red; font-size: 1.5rem; padding: 2rem 4rem;";

/** @implements {import("./types").AbstractLogger} */
export class DistLogger {
  #core;

  /** @param {string} name  */
  constructor(name) {
    this.#core = new DevLogger(name);
  }
  info() {}
  debug() {}
  warn() {}
  error(message, ...args) {
    this.#core.error(message, ...args);
  }
  panic(message, ...args) {
    this.#core.panic(message, ...args);
  }
}

/** @implements {import("./types").AbstractLogger} */
export class DevLogger {
  #name;

  /** @param {string} name  */
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  info(message, ...args) {
    console.info("%c[info][%s] %s", INFO_STYLE, this.name, message, ...args);
  }
  debug(message, ...args) {
    console.log("%c[debug][%s] %s", DEBUG_STYLE, this.name, message, ...args);
  }
  warn(message, ...args) {
    console.warn("%c[warning][%s] %s", WARN_STYLE, this.name, message, ...args);
  }
  error(message, ...args) {
    console.error("%c[error][%s] %s", ERROR_STYLE, this.name, message, ...args);
  }
  panic(message, ...args) {
    console.error(
      "%cPANIC! (from %s) %s",
      PANIC_STYLE,
      this.name,
      message,
      ...args
    );
  }
}

/**
 * # Create a labeled logger
 * @param {string} name The name of the logger
 * @returns A new logger.
 */
export function createLogger(name = "anonymous") {
  return new DevLogger(name);
}

// TODO: Add conditional compilation
/** @type {import("./types").AbstractLogger} */
export default createLogger("default");
