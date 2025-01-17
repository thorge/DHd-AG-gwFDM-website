import { v5 as uuidv5 } from 'uuid';  // Import the v5 UUID generator

export default defineNuxtPlugin((nuxtApp) => {

  const i18n = nuxtApp.$i18n; // Access i18n instance from Nuxt app context
  const { t, locale, fallbackLocale } = i18n;

  const formatNumber = (number: number) => {
    return new Intl.NumberFormat().format(number);
  };

  /**
 * Utility function to validate UUID format
 * @param {string} uuid - The UUID string to validate.
 * @returns {boolean} - True if valid, otherwise false.
 */
  const isValidUuid = (uuid: string): Boolean => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }
  /**
     * Utility function to generate a UUID v5 from a given string
     * @param {string} name - The string to generate the UUID from.
     * @returns {string} - The generated UUID v5.
     */
  const generateUuidV5 = (name: string): string => {
    const NAMESPACE = 'd02e11c6-b404-5c80-a7a2-3a769e05aa20'; // Fixed namespace (same as in process-results.js)
    return uuidv5(name, NAMESPACE); // Generate the UUID v5
  };

  return {
    provide: {
      formatNumber,
      isValidUuid,
      generateUuidV5,  // Add the new function to the plugin context
    }
  };
});