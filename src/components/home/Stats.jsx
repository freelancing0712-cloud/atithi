import { motion } from "framer-motion";
import {
  FaUsers,
  FaUtensils,
  FaGlassCheers,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaAward />,
    number: "28+",
    title: "Years of Legacy",
  },
  {
    id: 2,
    icon: <FaUsers />,
    number: "1,00,000+",
    title: "Happy Customers",
  },
  {
    id: 3,
    icon: <FaGlassCheers />,
    number: "500+",
    title: "Events Hosted",
  },
  {
    id: 4,
    icon: <FaUtensils />,
    number: "150+",
    title: "Delicious Dishes",
  },
];

function Stats() {
  return (
    <section
      className="section-padding bg-gradient-to-b from-[#0A0A0A] to-black"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-amber-300">
            Hotel Atithi In Numbers
          </p>

          <h2 className="text-5xl lg:text-6xl mt-5">

            Trusted By

            <span className="gold-gradient">
              {" "}Thousands
            </span>

          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg leading-8">

            Every number reflects our dedication,
            hospitality and passion for serving
            delicious vegetarian food for decades.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                  {stats.map((stat, index) => (

            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl hover:shadow-amber-500/20 transition duration-500"
            >

              {/* Icon */}

              <div className="text-5xl text-amber-400 flex justify-center mb-6">

                {stat.icon}

              </div>

              {/* Number */}

              <h3 className="text-5xl lg:text-6xl font-bold text-white">

                {stat.number}

              </h3>

              {/* Title */}

              <p className="text-gray-300 text-lg mt-4">

                {stat.title}

              </p>

            </motion.div>

          ))}

        </div>

        {/* Bottom Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >

          <h3 className="text-4xl lg:text-5xl text-white font-semibold leading-tight">

            Serving Happiness
            <span className="gold-gradient">
              {" "}One Meal at a Time
            </span>

          </h3>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8 leading-8">

            For more than two decades, Hotel Atithi has been
            creating unforgettable dining experiences through
            exceptional hospitality, delicious cuisine and
            heartfelt service.

          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Stats;