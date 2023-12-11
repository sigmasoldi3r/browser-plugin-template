/**
 * # Generic app root error
 *
 * This error is used as the parent of all the application errors.
 *
 * This is done to help filtering which errors come from the inner
 * workings of the app, and which not. If an error comes in this flavour
 * uncaught, it means that there is a bug hidden somewhere which does belong
 * to the application itself. If not, it may be an external error,
 * like a bug in a third party library or the network.
 */
export class GenericAppError extends Error {}

export class MissingProviderError extends GenericAppError {
  constructor(name) {
    super(
      `Attempting to use a context outside of the provider, perhaps you're missing a <${name}></${name}>?`
    );
  }
  /** @param {string} name */
  static bound(name) {
    return () => {
      throw new this(name);
    };
  }
}
