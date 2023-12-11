import "../../translations";
import ReactDOM from "react-dom/client";
import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { AppRoot } from "../../components/AppRoot";
import { TabViewStateProvider, useTabViewState } from "./state";
import { TabRoutes } from "./routes";
import { createLogger } from "../../log";

const log = createLogger("TAB");

const App = observer(() => {
  const state = useTabViewState();
  useEffect(() => {
    log.info("Hello from tab!");
  }, []);
  return <TabRoutes page={state.page} />;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoot stateProvider={TabViewStateProvider}>
      <App />
    </AppRoot>
  </React.StrictMode>
);
