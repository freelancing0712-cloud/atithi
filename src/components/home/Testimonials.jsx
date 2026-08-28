import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviewImage = "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=85";

const reviews = [
  {
    id: 1,
    name: "Rahul Patil",
    review: "One of the best pure veg restaurants in Solapur. Excellent food quality, quick service and a beautiful ambience.",
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    review: "We celebrated my brother's birthday here. The banquet hall, decoration and food were simply amazing.",
  },
  {
    id: 3,
    name: "Amit Deshmukh",
    review: "Highly recommended for family dinners. Clean environment, friendly staff and delicious food.",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="section-padding section-band section-band-gold">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <img src={reviewImage} alt="Warm restaurant hospitality" className="image-frame h-[430px] w-full object-cover lg:h-[560px]" />
            <div className="mt-6 rounded-2xl border border-amber-200/15 bg-black/25 p-6">
              <p className="section-kicker">Guest Stories</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">Hundreds of happy family meals.</h2>
            </div>
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <p className="section-kicker">Customer Reviews</p>
              <h2 className="section-title">
                What Our
                <span className="gold-gradient"> Customers Say</span>
              </h2>
              <p className="section-copy mt-8 max-w-3xl">
                Guests trust Hotel Atithi for pure vegetarian food, attentive hospitality and celebrations that feel easy to host.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-5">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-1 text-amber-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-100">Verified Customer</p>
                  </div>
                  <p className="mt-5 text-base leading-8 text-gray-300">"{review.review}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-300 text-lg font-extrabold text-black">
                      {review.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{review.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
