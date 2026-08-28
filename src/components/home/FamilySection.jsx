import { motion } from "framer-motion";
import { Link } from "react-scroll";
import tableImage from "../../assets/images/Atithi_Dining_Hall.png";

function FamilySection() {
  return (
    <section id="family" className="section-padding section-band">
      <div className="site-container grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <p className="section-kicker">Family Dining</p>
          <h2 className="section-title">
            Elegant Seating For <span className="gold-gradient">Everyday Meals & Special Evenings</span>
          </h2>
          <p className="section-copy mt-7 max-w-xl">
            A comfortable restaurant atmosphere for family dinners, birthday treats, business lunches and relaxed vegetarian meals.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="lux-card p-6">
              <h3 className="text-xl font-semibold text-amber-200">Comfort First</h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">Spacious seating, calm lighting and service that gives families room to enjoy.</p>
            </div>
            <div className="lux-card p-6">
              <h3 className="text-xl font-semibold text-amber-200">Pure Veg Kitchen</h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">Classic vegetarian flavours prepared fresh for dine-in and delivery requests.</p>
            </div>
          </div>

          <Link to="booking" smooth={true} duration={250} offset={-82} className="btn-primary mt-9 inline-flex cursor-pointer items-center justify-center">
            Reserve Family Table
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <img src={tableImage} alt="Elegant vegetarian dining table" className="image-frame h-[430px] w-full object-cover lg:h-[590px]" />
          <div className="mt-6 lux-card p-6">
            <p className="section-kicker">Dine Together</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">A polished family setting with enough space for relaxed conversations.</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FamilySection;
