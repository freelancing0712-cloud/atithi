import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../common/Modal";
import { OWNER_WHATSAPP_NUMBER } from "../../data/siteConfig";
import { defaultMenuItems } from "../../data/siteConfig";

function MenuShowcase({ menuItems = defaultMenuItems, foodOrderingAvailable }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const categories = ["All", ...Array.from(new Set(menuItems.map((item) => item.category).filter(Boolean)))];
  const visibleMenuItems = activeCategory === "All" ? menuItems : menuItems.filter((item) => item.category === activeCategory);
  const totalItems = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalBill = selectedItems.reduce((sum, item) => sum + item.priceAmount * item.quantity, 0);

  const addItem = (item) => {
    setSelectedItems((prev) => {
      const exists = prev.find((entry) => entry.id === item.id);
      if (exists) {
        return prev.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setSelectedItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + amount } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const validateOrder = () => {
    if (!selectedItems.length) {
      alert("Please select at least one dish before placing the order.");
      return false;
    }
    if (!customerName || customerName.trim().length < 2) {
      alert("Please enter a valid name.");
      return false;
    }
    if (!customerPhone || customerPhone.trim().length < 10) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!customerAddress || customerAddress.trim().length < 5) {
      alert("Please enter your complete delivery address.");
      return false;
    }
    return true;
  };

  const handleOrderSubmit = () => {
    if (!validateOrder()) {
      return;
    }

    const summary = selectedItems
      .map((item) => `${item.name} x${item.quantity} - Rs. ${item.priceAmount * item.quantity}`)
      .join("\n");
    const message = `*FOOD ORDER REQUEST*\n\nCustomer: ${customerName}\nPhone: ${customerPhone}\nDelivery Address: ${customerAddress}\n\n*Order Details (${totalItems} items):*\n${summary}\n\n*Total Bill: Rs. ${totalBill}*\n\nSpecial Notes: ${customerNotes || "No special notes"}\n\nPlease confirm order and estimated delivery time.`;
    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsOrderSubmitted(true);
    setTimeout(() => {
      setIsOrderModalOpen(false);
      setSelectedItems([]);
      setCustomerName("");
      setCustomerPhone("");
      setCustomerAddress("");
      setCustomerNotes("");
      setIsOrderSubmitted(false);
    }, 2000);
  };

  return (
    <section id="menu" className="section-padding section-band section-band-gold">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <p className="section-kicker">Pure Veg Menu</p>
            <h2 className="section-title">
              Atithi's
              <span className="gold-gradient"> Fresh Kitchen </span>
              Menu
            </h2>
            <p className="section-copy mt-8 max-w-3xl">
              Browse the complete Hotel Atithi menu by category. Every listed item below matches the current hotel menu with its correct price.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 1 }} viewport={{ once: true }} className="menu-feature-panel">
            <div>
              <p className="section-kicker">Fresh Kitchen</p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-4xl">A clean, curated menu without clutter.</h3>
              <p className="mt-5 text-base leading-8 text-stone-300">Select dishes directly from polished menu cards. No distracting food photos, just names, prices, categories and quick ordering.</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Pure Veg", `${categories.length - 1} Categories`, "WhatsApp Order"].map((item) => (
                <div key={item} className="menu-feature-chip">{item}</div>
              ))}
            </div>
          </motion.div>
        </div>

        {!isMenuOpen ? (
          <div className="mt-14 rounded-3xl border border-amber-300/15 bg-black/30 p-10 text-center">
            <p className="text-lg font-semibold text-white">The full menu is available on demand for a cleaner browsing experience.</p>
            <p className="mt-3 text-sm leading-7 text-gray-400">Click below to open the menu whenever you wish to review dishes and place an order.</p>
            <button type="button" onClick={() => setIsMenuOpen(true)} className="btn-primary mt-8">
              View Menu
            </button>
          </div>
        ) : (
          <>
            <div className="mt-14 flex flex-wrap justify-center gap-4 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`tab-button shrink-0 text-sm ${activeCategory === category ? "tab-button-active" : ""}`}
                >
                  {category}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="btn-secondary mt-3 text-sm md:mt-0"
              >
                Hide Menu
              </button>
            </div>

            <div className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {visibleMenuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.025, 0.25), duration: 0.45 }}
                  viewport={{ once: true }}
                  className="menu-card"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <span className="menu-card-mark">{String(index + 1).padStart(2, "0")}</span>
                      <span className="menu-price">{item.price}</span>
                    </div>
                    <p className="mt-7 text-xs font-bold uppercase leading-6 tracking-[0.18em] text-amber-300">{item.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-8 text-white">{item.name}</h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-7 text-gray-400">{item.description}</p>
                    {selectedItems.some((entry) => entry.id === item.id) ? (
                      <div className="mt-8 flex items-center gap-3">
                        <button type="button" aria-label={`Remove one ${item.name}`} onClick={() => updateQuantity(item.id, -1)} className="quantity-button">-</button>
                        <span className="min-w-8 text-center font-bold text-white">
                          {selectedItems.find((entry) => entry.id === item.id)?.quantity}
                        </span>
                        <button type="button" aria-label={`Add another ${item.name}`} onClick={() => addItem(item)} className="quantity-button">+</button>
                      </div>
                    ) : (
                      <button type="button" onClick={() => addItem(item)} className="menu-action mt-8 w-fit">
                        Add Dish
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center gap-5 rounded-xl border border-amber-300/15 bg-black/30 p-6 text-center md:flex-row md:justify-between md:p-7 md:text-left">
              <div>
                <p className="font-semibold text-white">
                  {totalItems ? `${totalItems} item${totalItems === 1 ? "" : "s"} in order` : `${visibleMenuItems.length} dishes showing`}
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  {totalItems ? `Current total: Rs. ${totalBill}` : "Pick a category above or add dishes directly to a WhatsApp order."}
                </p>
              </div>
              <button onClick={() => setIsOrderModalOpen(true)} className="btn-secondary w-full md:w-auto">
                Place Order ({totalItems}) - Rs. {totalBill}
              </button>
            </div>
          </>
        )}
      </div>

      <Modal open={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} title="Place Your Food Order">
        {!foodOrderingAvailable ? (
          <div className="rounded-xl border border-amber-500/20 bg-black/30 p-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-amber-400">Food Orders Paused</h2>
            <p className="text-gray-400">The owner has temporarily paused online food ordering. Please call the hotel directly for urgent requests.</p>
          </div>
        ) : isOrderSubmitted ? (
          <div className="rounded-xl border border-amber-500/20 bg-black/30 p-8 text-center">
            <div className="mb-4 text-4xl font-semibold text-amber-300">Done</div>
            <h2 className="mb-2 text-2xl font-semibold text-amber-400">Order Sent Successfully</h2>
            <p className="text-gray-400">Your food order has been sent to Hotel Atithi via WhatsApp.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">Selected Items</h4>
                  <p className="mt-2 text-sm text-gray-400">Adjust quantity before sending the order to WhatsApp.</p>
                </div>
                <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-black">{totalItems} items</span>
              </div>

              {selectedItems.length === 0 ? (
                <p className="mt-4 text-sm text-gray-400">No items selected yet. Tap Add Dish on the menu cards above.</p>
              ) : (
                selectedItems.map((item) => (
                  <div key={item.id} className="mt-4 flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.price} each - Subtotal Rs. {item.priceAmount * item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" aria-label={`Remove one ${item.name}`} onClick={() => updateQuantity(item.id, -1)} className="quantity-button">-</button>
                      <span className="min-w-[36px] text-center font-semibold text-white">{item.quantity}</span>
                      <button type="button" aria-label={`Add another ${item.name}`} onClick={() => updateQuantity(item.id, 1)} className="quantity-button">+</button>
                    </div>
                  </div>
                ))
              )}
              {selectedItems.length > 0 && (
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="font-semibold text-gray-300">Total Bill</span>
                  <strong className="text-xl text-amber-300">Rs. {totalBill}</strong>
                </div>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Your full name" className="form-input" />
              <input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="Phone number" className="form-input" />
            </div>
            <textarea value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} placeholder="Complete Solapur delivery address" rows="3" className="form-input" />
            <textarea value={customerNotes} onChange={(e) => setCustomerNotes(e.target.value)} placeholder="Special notes optional" rows="2" className="form-input" />
            <button onClick={handleOrderSubmit} className="btn-primary w-full py-4 text-lg font-semibold">Send Order to Owner via WhatsApp</button>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
              Delivery requests are accepted for Solapur city only. The owner will confirm availability and delivery time on WhatsApp.
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default MenuShowcase;
