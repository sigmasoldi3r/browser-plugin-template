import { Router } from "../../components/router/Router";
import { Route } from "../../components/router/Route";

/** @param {{ page: string }} param0 */
export function TabRoutes({ page }) {
  return (
    <Router page={page}>
      <Route to="hello" element={() => <>Hello</>} />
      <Route to="world" element={() => <>World</>} />ç
    </Router>
  );
}
