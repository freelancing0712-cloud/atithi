import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import { OWNER_PHONE_DISPLAY, OWNER_WHATSAPP_NUMBER, hotelInfo } from "../../data/siteConfig";

function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[#0B0B0B]">
      <div className="site-container">
        <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-center">
          <p className="section-kicker">Contact Us</p>
          <h2 className="section-title mx-auto">
            We'd Love To
            <span className="gold-gradient"> Serve You</span>
          </h2>
          <p className="section-copy mx-auto mt-8 max-w-3xl">
            Visit Hotel Atithi for an unforgettable dining experience, delicious vegetarian cuisine and premium hospitality in Solapur.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="contact-details">
            <div className="contact-info-card glass flex items-start gap-6 rounded-xl">
              <div className="pt-1 text-3xl text-amber-400"><FaPhoneAlt /></div>
              <div>
                <h3 className="text-2xl text-white">Call Us</h3>
                <p className="mt-3 text-gray-300">{OWNER_PHONE_DISPLAY}</p>
              </div>
            </div>

            <div className="contact-info-card glass flex items-start gap-6 rounded-xl">
              <div className="pt-1 text-3xl text-amber-400"><FaMapMarkerAlt /></div>
              <div>
                <h3 className="text-2xl text-white">Address</h3>
                <p className="mt-3 text-gray-300">{hotelInfo.address}</p>
              </div>
            </div>

            <div className="contact-info-card glass flex items-start gap-6 rounded-xl">
              <div className="pt-1 text-3xl text-amber-400"><FaClock /></div>
              <div>
                <h3 className="text-2xl text-white">Opening Hours</h3>
                <p className="mt-3 text-gray-300">{hotelInfo.openingHours}</p>
              </div>
            </div>

            <div className="contact-actions flex flex-wrap">
              <a href={`https://wa.me/${OWNER_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                <button className="btn-primary flex items-center gap-3"><FaWhatsapp />WhatsApp Us</button>
              </a>
              <a href={hotelInfo.mapsUrl} target="_blank" rel="noreferrer">
                <button className="btn-secondary">Get Directions</button>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div className="glass h-[420px] overflow-hidden rounded-xl lg:h-[560px]">
              <iframe title="Hotel Atithi Location" src="https://www.google.com/maps?q=Hotel+Atithi+Solapur&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
