import { createContext, useContext, useState } from "react";

import { MissingProviderError } from "../errors";

/**
 * @template T
 * @param {{ name: string, new(): T }} StateClass
 * @param {() => T} stateFactory
 * @returns {[() => JSX.Element, () => T]}
 */
export function createStateContext(
  StateClass,
  stateFactory = () => new StateClass()
) {
  const context = createContext(null);

  /**
   * @param {import("react").PropsWithChildren<{}>} param0
   */
  function StateProvider({ children }) {
    const [state] = useState(stateFactory);
    return <context.Provider value={state}>{children}</context.Provider>;
  }

  function useStateContext() {
    const ctx = useContext(context);
    if (ctx == null) {
      throw new MissingProviderError(
        `${StateClass?.name ?? "UnknownState"}Provider`
      );
    }
    return ctx;
  }

  return [StateProvider, useStateContext];
}
