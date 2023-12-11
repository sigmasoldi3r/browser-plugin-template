import { GenericAppError } from "../../errors";

export class GenericRouterError extends GenericAppError {}

export class InvalidRouterChildrenError extends GenericRouterError {
  static NoRoutes = class NoRoutes extends InvalidRouterChildrenError {
    constructor() {
      super(
        `The router does not have multiple children! Perhaps you do not need a router here? Or you may be missing some routes.`
      );
    }
  };
  static NotARoute = class NotARoute extends InvalidRouterChildrenError {
    constructor() {
      super(
        `Found a children under <Router>...</Router> which is NOT a route! Remove that children first.`
      );
    }
  };
}
