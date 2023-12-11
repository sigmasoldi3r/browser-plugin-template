import "../../translations";
import ReactDOM from "react-dom/client";
import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Box } from "@telefonica/mistica";

import { AppRoot } from "../../components/AppRoot";
import { PopupViewStateProvider, usePopupViewState } from "./state";
import { PopupRoutes } from "./routes";
import { createLogger } from "../../log";

const log = createLogger("popup");

const App = observer(() => {
  const state = usePopupViewState();

  useEffect(() => {
    log.info("Hello from popup!");
  }, []);

  return (
    <Box className="w-[384px] h-[536px] px-4 flex">
      <PopupRoutes page={state.page} />
    </Box>
  );
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoot stateProvider={PopupViewStateProvider}>
      <App />
    </AppRoot>
  </React.StrictMode>
);
