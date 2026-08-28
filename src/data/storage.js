export const SETTINGS_KEY = "atithi-site-settings";
export const MENU_KEY = "atithi-menu-items";

export function readStoredValue(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) {
      return fallback;
    }

    return JSON.parse(stored);
  } catch {
    return fallback;
  }
}
