import interiorImage from "../assets/images/interior-atithi.webp";

function BanquetSection() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}

        <div>

          <p className="text-amber-400 uppercase tracking-[5px] mb-4">
            Banquet & Events
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-serif leading-tight">
            Celebrate
            <span className="italic text-amber-400">
              {" "}Life's Moments
            </span>
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-8">
            From birthdays and anniversaries to engagement ceremonies
            and family gatherings, Atithi provides the perfect venue
            with premium hospitality and authentic vegetarian cuisine.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-black border border-amber-500/20 rounded-3xl p-6">

              <h3 className="text-amber-400 text-4xl font-bold">
                1200+
              </h3>

              <p className="text-gray-400 mt-2">
                Events Hosted
              </p>

            </div>

            <div className="bg-black border border-amber-500/20 rounded-3xl p-6">

              <h3 className="text-amber-400 text-4xl font-bold">
                28+
              </h3>

              <p className="text-gray-400 mt-2">
                Years Legacy
              </p>

            </div>

          </div>

         <a
  href="https://wa.me/918007614615?text=Hello%20Atithi,%20I%20want%20to%20book%20the%20banquet%20hall."
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-12 bg-amber-500 hover:bg-amber-400 text-black px-10 py-4 rounded-full font-semibold transition"
>
  Book Your Event
</a>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative">

          <img
            src={interiorImage}
            alt="Banquet Hall"
            className="rounded-[35px] shadow-2xl w-full h-[650px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-lg p-6 rounded-3xl border border-amber-500/20">

            <h4 className="text-white text-2xl font-serif">
              Premium Banquet Hall
            </h4>

            <p className="text-gray-300 mt-2">
              Perfect for celebrations and memorable events.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BanquetSection;