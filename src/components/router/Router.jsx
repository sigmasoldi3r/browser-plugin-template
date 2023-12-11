import { useMemo } from "react";
import { InvalidRouterChildrenError } from "./errors";
import { isIterable } from "../../object/isIterable";
import { isReactElement } from "../../object/isReactElement";
import { Route } from "./Route";

/**
 * @template {string} T
 * @param {Iterable<import("react").ReactNode>} children
 */
function mapChildrenToRouteTable(children) {
  /** @type {Record<T, ReactElement>} */
  const record = {};
  for (const child of children) {
    if (isReactElement(child) && child.type === Route) {
      record[child.props.to] = child;
    } else {
      throw new InvalidRouterChildrenError.NotARoute();
    }
  }
  return record;
}

/**
 * @template {string} T
 * @param {import("./types").RouterProps<T>} param0
 */
export function Router({ children, page }) {
  const routesTable = useMemo(() => {
    if (children != null && isIterable(children)) {
      return mapChildrenToRouteTable(children);
    }
    throw new InvalidRouterChildrenError.NoRoutes();
  }, [children]);

  const current = useMemo(() => {
    const element = routesTable[page];
    if (element == null) return null;
    const Element = element.props.element;
    return <Element key={element.props.to} />;
  }, [page, routesTable]);

  return current;
}
