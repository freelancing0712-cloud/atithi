import { useState } from "react";
import { OWNER_WHATSAPP_NUMBER } from "../../data/siteConfig";

function BanquetBookingForm({ availability, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    notes: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, phone, date, guests, address } = formData;

    if (!name || name.trim().length < 2) {
      alert("Please enter a valid name.");
      return false;
    }
    if (!phone || phone.trim().length < 10) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!date) {
      alert("Please select an event date.");
      return false;
    }
    if (!guests || guests < 1) {
      alert("Please enter number of guests.");
      return false;
    }
    if (!address || address.trim().length < 5) {
      alert("Please enter event location or address.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const message = `*BANQUET HALL BOOKING REQUEST*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Date: ${formData.date}\nLocation: ${formData.address}\nNumber of Guests: ${formData.guests}\nEvent Details: ${formData.notes || "No specific details"}\n\nPlease provide quotation and availability for this event.`;
    window.open(`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", date: "", guests: "", notes: "", address: "" });
      setSubmitted(false);
      onClose?.();
    }, 2000);
  };

  if (!availability) {
    return (
      <div className="rounded-xl border border-amber-400/20 bg-black/40 p-7 text-center sm:p-9">
        <h2 className="text-3xl text-white">Banquet Requests Paused</h2>
        <p className="mt-4 text-gray-300">The owner has temporarily paused online banquet requests. Please call the hotel directly for urgent event enquiries.</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-amber-500/20 bg-[#111] p-7 text-center sm:p-9">
        <div className="mb-5 text-4xl font-semibold text-amber-300">Done</div>
        <h2 className="mb-3 text-2xl font-semibold text-amber-400">Banquet Request Sent</h2>
        <p className="text-gray-400">Your banquet booking request has been sent to Hotel Atithi via WhatsApp.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-500/20 bg-[#111] p-6 sm:p-9">
      <h2 className="text-3xl font-serif text-white">Book Banquet Hall</h2>
      <p className="mt-4 text-gray-400">Perfect for weddings, birthdays, corporate events and celebrations.</p>
      <div className="mt-9 space-y-5">
        <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="form-input" />
        <input name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} className="form-input" />
        <textarea name="address" placeholder="Event Location or Venue Details" rows="3" value={formData.address} onChange={handleChange} className="form-input" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-input" />
        <input type="number" name="guests" placeholder="Estimated Number of Guests" value={formData.guests} onChange={handleChange} className="form-input" />
        <textarea name="notes" placeholder="Event Type, Theme and Special Requirements (Optional)" rows="4" value={formData.notes} onChange={handleChange} className="form-input" />
        <button onClick={handleSubmit} className="my-2 w-full rounded-xl bg-amber-500 py-4 font-semibold text-black transition hover:bg-amber-400 active:scale-95">
          Send Banquet Request via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default BanquetBookingForm;
