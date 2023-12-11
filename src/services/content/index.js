import { createLogger } from "../../log";

const log = createLogger("CONTENT SCRIPT");

log.info(`Hello from content script! Running at ${window.location}`);
