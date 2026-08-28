import { useState } from "react";
import { OWNER_WHATSAPP_NUMBER } from "../../data/siteConfig";

function ReserveTableForm({ availability, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    request: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, phone, date, time, address } = formData;

    if (!name || name.trim().length < 2) {
      alert("Please enter a valid name.");
      return false;
    }
    if (!phone || phone.trim().length < 10) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!date) {
      alert("Please select a date for your reservation.");
      return false;
    }
    if (!time) {
      alert("Please select a time for your reservation.");
      return false;
    }
    if (!address || address.trim().length < 5) {
      alert("Please enter your complete address.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const message = `*TABLE RESERVATION REQUEST*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests || "Not mentioned"}\nSpecial Request: ${formData.request || "No notes"}\n\nPlease confirm this reservation.`;
    window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", date: "", time: "", guests: "", request: "", address: "" });
      setSubmitted(false);
      onClose?.();
    }, 2000);
  };

  if (!availability) {
    return (
      <div className="rounded-xl border border-amber-400/20 bg-black/40 p-7 text-center sm:p-9">
        <h2 className="text-3xl text-white">Table Reservations Paused</h2>
        <p className="mt-4 text-gray-300">The owner has temporarily paused online table bookings. Please call the hotel directly for urgent reservations.</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-amber-500/20 bg-[#111] p-7 text-center sm:p-9">
        <div className="mb-5 text-4xl font-semibold text-amber-300">Done</div>
        <h2 className="mb-3 text-2xl font-semibold text-amber-400">Reservation Request Sent</h2>
        <p className="text-gray-400">Your table reservation request has been sent to Hotel Atithi via WhatsApp.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-500/20 bg-[#111] p-6 sm:p-9">
      <h2 className="mb-9 text-3xl font-serif text-white">Reserve A Table</h2>
      <div className="space-y-5">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="form-input" />
        <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} className="form-input" />
        <textarea name="address" placeholder="Your Complete Address" rows="3" value={formData.address} onChange={handleChange} className="form-input" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input" />
        <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-input" />
        <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} className="form-input" />
        <textarea name="request" placeholder="Special Request (Optional)" rows="3" value={formData.request} onChange={handleChange} className="form-input" />
        <button onClick={handleSubmit} className="my-2 w-full rounded-xl bg-amber-500 py-4 font-semibold text-black transition hover:bg-amber-400 active:scale-95">
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ReserveTableForm;
