import { useState } from "react";
import { defaultMenuItems, OWNER_WHATSAPP_NUMBER } from "../../data/siteConfig";
import { isValidPhoneNumber } from "../../utils/formValidation";

function FoodOrderForm({ availability, menuItems = defaultMenuItems, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [selectedDishId, setSelectedDishId] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const totalItems = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalBill = selectedItems.reduce((sum, item) => sum + item.priceAmount * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, phone, address } = formData;

    if (!name || name.trim().length < 2) {
      alert("Please enter a valid name.");
      return false;
    }
    if (!isValidPhoneNumber(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!address || address.trim().length < 5) {
      alert("Please enter your complete delivery address.");
      return false;
    }
    if (!selectedItems.length) {
      alert("Please add at least one dish to your order.");
      return false;
    }
    return true;
  };

  const addDish = () => {
    const dish = menuItems.find((item) => item.id === Number(selectedDishId));
    if (!dish) return;

    setSelectedItems((prev) => {
      const exists = prev.find((item) => item.id === dish.id);
      if (exists) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setSelectedItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + amount } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const orderSummary = selectedItems
      .map((item) => `${item.name} x${item.quantity} - Rs. ${item.priceAmount * item.quantity}`)
      .join("\n");
    const message = `*FOOD ORDER REQUEST*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDelivery Address: ${formData.address}\n\n*Order Details (${totalItems} items):*\n${orderSummary}\n\n*Total Bill: Rs. ${totalBill}*\n\nSpecial Notes: ${formData.notes || "None"}\n\nPlease confirm order and delivery time.`;
    window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", address: "", notes: "" });
      setSelectedItems([]);
      setSelectedDishId("");
      setSubmitted(false);
      onClose?.();
    }, 2000);
  };

  if (!availability) {
    return (
      <div className="rounded-xl border border-amber-400/20 bg-black/40 p-7 text-center sm:p-9">
        <h2 className="text-3xl text-white">Food Orders Paused</h2>
        <p className="mt-4 text-gray-300">The owner has temporarily paused online food ordering. Please call the hotel directly for urgent requests.</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-amber-500/20 bg-[#111] p-7 text-center sm:p-9">
        <div className="mb-5 text-4xl font-semibold text-amber-300">Done</div>
        <h2 className="mb-3 text-2xl font-semibold text-amber-400">Food Order Sent</h2>
        <p className="text-gray-400">Your food order has been sent to Hotel Atithi via WhatsApp.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-500/20 bg-[#111] p-6 sm:p-9">
      <h2 className="text-3xl font-serif text-white">Order Food</h2>
      <p className="mt-4 text-gray-400">Available for Solapur city delivery requests. Pure vegetarian cuisine.</p>
      <div className="mt-9 space-y-5">
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="form-input" />
        <input name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} className="form-input" />
        <textarea name="address" placeholder="Complete Solapur Delivery Address" rows="3" value={formData.address} onChange={handleChange} className="form-input" />
        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <label htmlFor="dish-select" className="mb-2 block text-sm font-semibold text-gray-200">Choose a dish</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <select id="dish-select" value={selectedDishId} onChange={(e) => setSelectedDishId(e.target.value)} className="form-input">
              <option value="">Select from the menu</option>
              {menuItems.map((item) => (
                <option key={item.id} value={item.id}>{item.name} - {item.price}</option>
              ))}
            </select>
            <button type="button" onClick={addDish} disabled={!selectedDishId} className="menu-action shrink-0 disabled:cursor-not-allowed disabled:opacity-40">
              Add Dish
            </button>
          </div>

          {selectedItems.length === 0 ? (
            <p className="mt-4 text-sm text-gray-400">Add dishes here. You can add the same dish more than once.</p>
          ) : (
            <div className="mt-4 space-y-3">
              {selectedItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.price} each - Subtotal Rs. {item.priceAmount * item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" aria-label={`Remove one ${item.name}`} onClick={() => updateQuantity(item.id, -1)} className="quantity-button">-</button>
                    <span className="min-w-8 text-center font-bold">{item.quantity}</span>
                    <button type="button" aria-label={`Add another ${item.name}`} onClick={() => updateQuantity(item.id, 1)} className="quantity-button">+</button>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-semibold text-gray-300">{totalItems} items</span>
                <strong className="text-xl text-amber-300">Total: Rs. {totalBill}</strong>
              </div>
            </div>
          )}
        </div>
        <textarea name="notes" placeholder="Special Notes or Dietary Preferences (Optional)" rows="2" value={formData.notes} onChange={handleChange} className="form-input" />
        <button onClick={handleSubmit} className="my-2 w-full rounded-xl bg-amber-500 py-4 font-semibold text-black transition hover:bg-amber-400 active:scale-95">
          Send Order via WhatsApp - Rs. {totalBill}
        </button>
      </div>
    </div>
  );
}

export default FoodOrderForm;
