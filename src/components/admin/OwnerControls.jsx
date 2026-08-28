import { useState } from "react";
import { defaultMenuItems } from "../../data/siteConfig";
import { MENU_KEY, SETTINGS_KEY, readStoredValue } from "../../data/storage";
import { normalizeMenuItems, parsePriceAmount } from "../../data/menu";

function OwnerControls({ availability, onAvailabilityChange, onMenuChange }) {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(() => normalizeMenuItems(readStoredValue(MENU_KEY, defaultMenuItems), defaultMenuItems));
  const [newItem, setNewItem] = useState({ name: "", category: "", price: "", image: "", description: "" });

  const saveMenu = (items) => {
    const normalizedItems = normalizeMenuItems(items, defaultMenuItems);
    setMenuItems(normalizedItems);
    localStorage.setItem(MENU_KEY, JSON.stringify(normalizedItems));
    window.dispatchEvent(new Event("atithi-menu-updated"));
    onMenuChange?.(normalizedItems);
  };

  const toggleAvailability = (key) => {
    const next = { ...availability, [key]: !availability[key] };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("atithi-settings-updated"));
    onAvailabilityChange(next);
  };

  const updateMenuItem = (id, field, value) => {
    saveMenu(
      menuItems.map((item) => {
        if (item.id !== id) {
          return item;
        }

        if (field === "price") {
          const priceAmount = parsePriceAmount(value);
          return {
            ...item,
            priceAmount,
            price: priceAmount ? `Rs. ${priceAmount}` : value,
          };
        }

        return { ...item, [field]: value };
      }),
    );
  };

  const addMenuItem = () => {
    if (!newItem.name.trim() || !newItem.category.trim() || !newItem.price.trim()) {
      alert("Please add dish name, category and price.");
      return;
    }

    const priceAmount = parsePriceAmount(newItem.price);
    if (!priceAmount) {
      alert("Please enter a valid numeric price.");
      return;
    }

    saveMenu([
      ...menuItems,
      {
        id: Date.now(),
        name: newItem.name.trim(),
        category: newItem.category.trim(),
        priceAmount,
        price: `Rs. ${priceAmount}`,
        image: newItem.image.trim() || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
        description: newItem.description.trim() || "Freshly prepared pure vegetarian dish from Hotel Atithi.",
      },
    ]);
    setNewItem({ name: "", category: "", price: "", image: "", description: "" });
  };

  const removeMenuItem = (id) => {
    saveMenu(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-amber-400/40 bg-black px-5 py-3 text-sm font-semibold text-amber-200 shadow-2xl shadow-black/50 transition hover:bg-amber-400 hover:text-black"
      >
        Owner Controls
      </button>

      {open && (
        <div className="mt-4 max-h-[78vh] w-[min(92vw,520px)] overflow-auto rounded-2xl border border-amber-400/20 bg-[#080808] p-5 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">Owner Controls</h2>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                These controls help you test menu and booking changes. For live customer-wide updates after deployment, connect a CMS or update the menu file before redeploying.
              </p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="text-2xl text-gray-400 hover:text-white">
              x
            </button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["table", "Table Booking"],
              ["food", "Food Orders"],
              ["banquet", "Banquet"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => toggleAvailability(key)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${availability[key] ? "bg-emerald-500 text-black" : "bg-red-500 text-white"}`}
              >
                {label}: {availability[key] ? "On" : "Off"}
              </button>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="text-lg font-semibold text-white">Add Menu Item</h3>
            <div className="mt-4 grid gap-3">
              <input value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} placeholder="Dish name" className="owner-input" />
              <input value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} placeholder="Category, example: Paneer Sabji" className="owner-input" />
              <input value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} placeholder="Price, example: 180" className="owner-input" />
              <input value={newItem.image} onChange={(e) => setNewItem({ ...newItem, image: e.target.value })} placeholder="Image URL optional" className="owner-input" />
              <textarea value={newItem.description} onChange={(e) => setNewItem({ ...newItem, description: e.target.value })} placeholder="Short description optional" rows="2" className="owner-input" />
              <button type="button" onClick={addMenuItem} className="btn-primary w-full">Add Dish</button>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="grid gap-3">
                  <input value={item.name} onChange={(e) => updateMenuItem(item.id, "name", e.target.value)} className="owner-input" />
                  <input value={item.category} onChange={(e) => updateMenuItem(item.id, "category", e.target.value)} className="owner-input" />
                  <input value={item.price} onChange={(e) => updateMenuItem(item.id, "price", e.target.value)} className="owner-input" />
                  <input value={item.image} onChange={(e) => updateMenuItem(item.id, "image", e.target.value)} className="owner-input" />
                  <textarea value={item.description} onChange={(e) => updateMenuItem(item.id, "description", e.target.value)} rows="2" className="owner-input" />
                </div>
                <button type="button" onClick={() => removeMenuItem(item.id)} className="mt-3 rounded-xl border border-red-400/40 px-4 py-2 text-sm font-semibold text-red-200 transition hover:bg-red-500 hover:text-white">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default OwnerControls;
