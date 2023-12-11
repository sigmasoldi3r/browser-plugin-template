import { useMemo } from "react";
import { identity } from "../functions";

/**
 * @param  {...(string|null|undefined)} classes
 * @return {string}
 */
export function useComputedClasses(...classes) {
  return useMemo(() => classes.filter(identity).join(" "), [classes]);
}
