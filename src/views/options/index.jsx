import React from "react";
import ReactDOM from "react-dom/client";
import { useTranslation } from "react-i18next";
import { AppRoot } from "../../components/AppRoot";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("configuration:main.title")}</h1>
      Hello World!
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoot>
      <App />
    </AppRoot>
  </React.StrictMode>
);
