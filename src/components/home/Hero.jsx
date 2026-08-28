import { motion } from "framer-motion";
import { Link } from "react-scroll";
const heroImage = "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=80";

function Hero({ onOpenTable, onOpenFood, onOpenBanquet }) {
  return (
    <section id="hero" className="relative min-h-[760px] w-full overflow-hidden lg:min-h-screen">
      <img src={heroImage} alt="Hotel Atithi luxury dining experience" loading="eager" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050403]/95 via-[#050403]/76 to-black/35"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#070604] via-transparent to-black/30"></div>

      <div className="site-container relative z-20 grid min-h-[760px] items-center gap-12 pb-24 pt-36 lg:min-h-screen lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:pb-28 lg:pt-32 xl:gap-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-amber-300/30 bg-black/35 px-5 py-2.5 backdrop-blur-xl"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-amber-400"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-200">Since 1998 | Solapur</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl font-semibold leading-none md:text-8xl lg:text-[96px] xl:text-[108px]">
            <span className="gold-gradient">ATITHI</span>
          </motion.h1>

          <motion.h2 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="mt-8 max-w-3xl text-3xl font-medium leading-[1.2] text-white md:text-5xl lg:text-[3.1rem] xl:text-[3.35rem]">
            Pure Vegetarian Dining,
            <br />
            <span className="text-amber-200">Crafted With Occasion.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="section-copy mt-10 max-w-2xl">
            A refined Solapur destination for family meals, curated vegetarian dishes, home delivery requests, and elegant banquet celebrations.
          </motion.p>
 
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="mt-20 flex flex-wrap gap-5">
            <button onClick={onOpenTable} className="btn-primary shadow-2xl shadow-amber-500/40">Reserve Table</button>
            <button onClick={onOpenFood} className="btn-secondary">Order Food</button>
            <Link to="banquet" smooth={true} duration={250} offset={-82}>
              <button className="btn-secondary">Book Banquet</button>
            </Link>
          </motion.div>
 
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="mt-28 grid max-w-3xl grid-cols-3 gap-5 sm:gap-6 max-[520px]:grid-cols-1">
            <div className="lux-card min-h-[140px] p-6">
              <h3 className="text-3xl font-semibold text-amber-200 md:text-4xl">28+</h3>
              <p className="mt-3 text-sm text-stone-400 sm:text-base">Years</p>
            </div>
            <div className="lux-card min-h-[140px] p-6">
              <h3 className="text-3xl font-semibold text-amber-200 md:text-4xl">1L+</h3>
              <p className="mt-3 text-sm text-stone-400 sm:text-base">Guests</p>
            </div>
            <div className="lux-card min-h-[140px] p-6">
              <h3 className="text-3xl font-semibold text-amber-200 md:text-4xl">500+</h3>
              <p className="mt-3 text-sm text-stone-400 sm:text-base">Events</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1 }} className="hidden self-end pb-10 lg:block">
          <div className="lux-card p-8 backdrop-blur-xl">
            <p className="section-kicker">Signature</p>
            <h3 className="mt-5 text-2xl font-semibold leading-snug text-white">Family Dining & Banquet</h3>
            <p className="section-copy mt-5 text-base">Premium hospitality for meals, milestones, and private celebrations.</p>
            <button onClick={onOpenBanquet} className="btn-primary mt-8 w-full">Book Your Event</button>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center sm:flex">
        <p className="mb-3 text-xs uppercase tracking-[4px] text-gray-300">Scroll Down</p>
        <div className="h-16 w-[2px] overflow-hidden rounded-full bg-white/20">
          <motion.div animate={{ y: [0, 50, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="h-6 w-full rounded-full bg-amber-400" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
