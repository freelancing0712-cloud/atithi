export const SETTINGS_KEY = "atithi-site-settings";
export const MENU_KEY = "atithi-menu-items";

export function readStoredValue(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) {
      return fallback;
    }

    const parsed = JSON.parse(stored);
    if (key === MENU_KEY && Array.isArray(parsed) && parsed.some((item) => !item.category)) {
      localStorage.removeItem(key);
      return fallback;
    }

    return parsed;
  } catch {
    return fallback;
  }
}
