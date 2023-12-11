/**
 * Adds all the namespaces to each translation.
 * @param {import("i18next").i18n} i18next
 * @param {Record<string, Record<string, unknown>>} translations
 */
export function addNamespaces(i18next, translations) {
  for (const [language, namespaces] of Object.entries(translations)) {
    for (const [namespace, translations] of Object.entries(namespaces)) {
      i18next.addResourceBundle(language, namespace, translations);
    }
  }
}
