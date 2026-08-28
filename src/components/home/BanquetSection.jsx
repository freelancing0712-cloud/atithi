import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../common/Modal";
import BanquetBookingForm from "../forms/BanquetBookingForm";
import banquetImage from "../../assets/images/Banquet_Hall.png";

function BanquetSection({ availability }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="banquet" className="section-padding section-band">
      <div className="site-container grid items-center gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <p className="section-kicker">Banquet Hall</p>
          <h2 className="section-title">
            Celebrate your special moments in a luxurious venue.
          </h2>
          <p className="section-copy mt-8 max-w-xl">
            Host weddings, anniversaries, corporate dinners, and private events with elegant decor, premium service, and pure vegetarian catering.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Private Events", "Pure Veg Catering", "Premium Decor"].map((item) => (
              <div key={item} className="lux-card p-5">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-200">{item}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setIsOpen(true)} className="mt-12 btn-primary">
            Book Your Event
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <img src={banquetImage} alt="Banquet Hall" className="image-frame h-[430px] w-full object-cover lg:h-[590px]" />
          <div className="mt-6 lux-card p-6">
            <h3 className="text-3xl font-semibold text-amber-300">Elevated Events</h3>
            <p className="mt-4 leading-8 text-gray-300">Space, decor and food come together for birthdays, engagements, meetings and family milestones.</p>
          </div>
        </motion.div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Book Banquet Hall">
        <BanquetBookingForm availability={availability} onClose={() => setIsOpen(false)} />
      </Modal>
    </section>
  );
}

export default BanquetSection;
