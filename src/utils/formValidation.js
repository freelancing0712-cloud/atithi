export function getDigitsOnly(value) {
  return String(value ?? "").replace(/\D/g, "");
}

export function isValidPhoneNumber(value) {
  return getDigitsOnly(value).length >= 10;
}

export function getTodayDateString() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60 * 1000);
  return localDate.toISOString().split("T")[0];
}

export function isTodayOrFutureDate(value) {
  if (!value) {
    return false;
  }

  return value >= getTodayDateString();
}
