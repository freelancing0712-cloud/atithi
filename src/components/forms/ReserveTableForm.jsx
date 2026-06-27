import { useState } from "react";

function ReserveTableForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const message = `
*TABLE RESERVATION REQUEST*

Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Special Request: ${formData.request}
`;

    const whatsappUrl = `https://wa.me/918007614615?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#111] p-8 rounded-3xl border border-amber-500/20">

      <h2 className="text-white text-3xl font-serif mb-8">
        Reserve A Table
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black text-white border border-gray-700"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black text-white border border-gray-700"
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black text-white border border-gray-700"
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black text-white border border-gray-700"
        />

        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black text-white border border-gray-700"
        />

        <textarea
          name="request"
          placeholder="Special Request"
          rows="4"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black text-white border border-gray-700"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-4 rounded-xl transition"
        >
          Submit Reservation
        </button>

      </div>

    </div>
  );
}

export default ReserveTableForm;