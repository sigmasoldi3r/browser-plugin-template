import JSZip from "jszip";
import * as fs from "fs";
import path from "path";

const readJson = (where) => JSON.parse(fs.readFileSync(where).toString());

/** @type {import("./src/manifest/firefox.json")} */
const firefoxTemplate = readJson("./src/manifest/firefox.json");
/** @type {import("./src/manifest/chrome.json")} */
const chromeTemplate = readJson("./src/manifest/chrome.json");
/** @type {import("./src/manifest/options.json")} */
const manifestOptions = readJson("./src/manifest/options.json");
/** @type {import("./package.json")} */
const packageInfo = readJson("./package.json");

/** Zips the entire dist folder as-is */
function zipAll(where) {
  const zip = new JSZip();
  function compressDir(root, zip) {
    fs.readdirSync(root).forEach((entry) => {
      const entryPath = path.join(root, entry);
      const stats = fs.statSync(entryPath);
      if (stats.isDirectory()) {
        const fold = zip.folder(entry);
        compressDir(entryPath, fold);
      } else {
        zip.file(entry, fs.readFileSync(entryPath));
      }
    });
  }
  compressDir("dist", zip);
  return zip.generateAsync({ type: "nodebuffer" }).then((out) => {
    fs.writeFileSync(where, out);
  });
}

fs.mkdirSync("target", { recursive: true });

// -- Firefox -- //
firefoxTemplate.name = packageInfo.name;
firefoxTemplate.description = packageInfo.description;
firefoxTemplate.version = packageInfo.version;
firefoxTemplate.background.scripts = manifestOptions.scripts.workers;
firefoxTemplate.host_permissions = manifestOptions.allowed_hosts;
firefoxTemplate.content_scripts = manifestOptions.scripts.content;
fs.writeFileSync(
  "dist/manifest.json",
  JSON.stringify(firefoxTemplate, null, 2)
);
zipAll("target/firefox.zip");

// -- Chrome -- //
chromeTemplate.name = packageInfo.name;
chromeTemplate.description = packageInfo.description;
chromeTemplate.version = packageInfo.version;
chromeTemplate.background.service_worker = manifestOptions.scripts.workers[0];
chromeTemplate.host_permissions = manifestOptions.allowed_hosts;
chromeTemplate.permissions = manifestOptions.permissions;
fs.writeFileSync("dist/manifest.json", JSON.stringify(chromeTemplate, null, 2));
zipAll("target/chrome.zip");
