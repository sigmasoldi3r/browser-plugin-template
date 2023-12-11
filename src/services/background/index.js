import { createLogger } from "../../log";
import browser from "webextension-polyfill";

const log = createLogger("BACKGROUND");

browser.runtime.onInstalled.addListener(async ({ reason }) => {
  if (reason === "install") {
    log.info("First time installation!");
  }
});
