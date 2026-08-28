export function parsePriceAmount(value) {
  const digits = String(value ?? "").replace(/[^\d.]/g, "");
  const amount = Number(digits);
  return Number.isFinite(amount) && amount > 0 ? amount : 0;
}

export function normalizeMenuItem(item, index) {
  if (!item || typeof item !== "object") {
    return null;
  }

  const name = String(item.name ?? "").trim();
  if (!name) {
    return null;
  }

  const category = String(item.category ?? "").trim() || "Chef Specials";
  const description = String(item.description ?? "").trim() || "Freshly prepared pure vegetarian dish from Hotel Atithi.";
  const image = String(item.image ?? "").trim();
  const priceAmount = parsePriceAmount(item.priceAmount || item.price);

  if (!priceAmount) {
    return null;
  }

  return {
    ...item,
    id: item.id ?? Date.now() + index,
    category,
    description,
    image,
    priceAmount,
    price: `Rs. ${priceAmount}`,
  };
}

export function normalizeMenuItems(items, fallback = []) {
  if (!Array.isArray(items)) {
    return fallback;
  }

  const normalized = items
    .map((item, index) => normalizeMenuItem(item, index))
    .filter(Boolean);

  return normalized.length ? normalized : fallback;
}
