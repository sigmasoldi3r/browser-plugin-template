import { createLogger } from "../../log";
import browser from "webextension-polyfill";

const log = createLogger("BACKGROUND");

log.debug("Hello from background!");

browser.runtime.onInstalled.addListener(async ({ reason }) => {
  log.debug(`Installation reason: ${reason}`);
  if (reason === "install") {
    log.info("First time installation!");
  }
});
