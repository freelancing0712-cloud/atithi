import { motion } from "framer-motion";
import { Link } from "react-scroll";
import hotelFrontImage from "../../assets/images/hotel-atithi-front.webp";

const highlights = [
  ["Pure Veg", "Fresh vegetarian cuisine with familiar Solapur warmth."],
  ["Family Ready", "Comfortable dining for everyday meals and celebrations."],
  ["Banquet", "A refined venue for birthdays, engagements and private events."],
];

function About() {
  return (
    <section id="about" className="section-padding section-band section-band-warm">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <img src={hotelFrontImage} alt="Hotel Atithi front exterior" loading="lazy" decoding="async" className="image-frame h-[430px] w-full object-cover lg:h-[590px]" />
          <div className="mt-6 rounded-2xl border border-amber-200/15 bg-black/25 p-6">
            <p className="section-kicker">Established</p>
            <h3 className="mt-2 text-4xl font-semibold text-amber-200">1998</h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">Trusted vegetarian hospitality in the heart of Solapur.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="section-kicker">About Hotel Atithi</p>
          <h2 className="section-title">
            A Warm Dining House With A <span className="gold-gradient">Premium Solapur Soul</span>
          </h2>
          <p className="section-copy mt-8 max-w-2xl">
            Hotel Atithi brings together pure vegetarian food, graceful interiors and attentive service for families, travellers and celebrations in Solapur.
          </p>

          <div className="mt-10 grid gap-4 rounded-2xl border border-amber-200/10 bg-black/25 p-5 sm:grid-cols-3">
            {["Fresh Pure Veg", "Central Solapur", "Events Ready"].map((item) => (
              <div key={item} className="border-amber-100/10 py-2 sm:border-r sm:last:border-r-0">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-11 grid gap-5 sm:grid-cols-3">
            {highlights.map(([title, text]) => (
              <div key={title} className="lux-card p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30">
                <h3 className="text-xl font-semibold text-amber-200">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-11 flex flex-wrap gap-5">
            <Link to="menu" smooth={true} duration={250} offset={-82} className="btn-primary inline-flex cursor-pointer items-center justify-center">
              Explore Menu
            </Link>
            <Link to="booking" smooth={true} duration={250} offset={-82} className="btn-secondary inline-flex cursor-pointer items-center justify-center">
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
