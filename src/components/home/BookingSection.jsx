import { useState } from "react";
import { motion } from "framer-motion";
import ReserveTableForm from "../forms/ReserveTableForm";
import FoodOrderForm from "../forms/FoodOrderForm";
import BanquetBookingForm from "../forms/BanquetBookingForm";

const bookingImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85";

const tabs = [
  { id: "table", label: "Reserve Table" },
  { id: "food", label: "Order Food" },
  { id: "banquet", label: "Book Banquet" },
];

function BookingSection({ availability }) {
  const [activeTab, setActiveTab] = useState("table");

  return (
    <section id="booking" className="section-padding section-band section-band-warm">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <img src={bookingImage} alt="Restaurant table ready for booking" className="image-frame h-[430px] w-full object-cover lg:h-[560px]" />
            <div className="mt-6 rounded-2xl border border-amber-200/15 bg-black/25 p-6">
              <p className="section-kicker">Booking</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">Order or reserve in seconds.</h2>
              <p className="section-copy mt-6">Choose your service and send the request directly to Hotel Atithi on WhatsApp.</p>
            </div>
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <p className="section-kicker">Quick Request</p>
              <h2 className="section-title">
                One place for tables, food and events.
              </h2>
              <p className="section-copy mt-7 max-w-2xl">
                Pick the request type below and send the details straight to the hotel team.
              </p>
            </motion.div>

            <div className="quick-request-tabs flex flex-wrap">
              {tabs.map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-button ${activeTab === tab.id ? "tab-button-active" : ""}`}>
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="quick-request-panel rounded-2xl border border-white/10 bg-black/30 shadow-2xl shadow-black/20">
              {activeTab === "table" && <ReserveTableForm availability={availability.table} />}
              {activeTab === "food" && <FoodOrderForm availability={availability.food} />}
              {activeTab === "banquet" && <BanquetBookingForm availability={availability.banquet} />}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
