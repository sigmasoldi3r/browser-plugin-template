import "../style/common.css";
import "../translations";
import { ErrorBoundary } from "react-error-boundary";
import { AppRootError } from "./AppRootError";

function StatelessComponent({ children }) {
  return children;
}

/**
 * @param {import("react").PropsWithChildren<{ stateProvider: import("react").ReactElement }>} param0
 */
export function AppRoot({
  children,
  stateProvider: StateProvider = StatelessComponent,
}) {
  return (
    <ErrorBoundary fallback={AppRootError}>
      <StateProvider>{children}</StateProvider>
    </ErrorBoundary>
  );
}
