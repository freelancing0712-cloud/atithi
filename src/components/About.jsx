import interiorImage from "../assets/images/interior-atithi.webp";

function About() {
  return (
    <section className="bg-[#0d0d0d] py-28 px-8 md:px-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}

        <div className="overflow-hidden rounded-3xl group">

          <img
            src={interiorImage}
            alt="Atithi Interior"
            className="
              w-full
              h-[600px]
              object-cover
              rounded-3xl
              transition
              duration-700
              group-hover:scale-110
            "
          />

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <p className="text-amber-400 tracking-[6px] uppercase mb-5">
            Since 1998
          </p>

          <h2
            className="
              text-white
              text-5xl
              md:text-7xl
              font-serif
              leading-tight
            "
          >
            A Pure Vegetarian
            <span className="text-amber-400 italic">
              {" "}Experience
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-8 leading-9">
            Atithi has been serving authentic vegetarian cuisine in Solapur
            for more than two decades. From family dinners to grand
            celebrations, our restaurant combines delicious food,
            elegant interiors and warm hospitality.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-amber-400 text-4xl font-bold">
                25+
              </h3>

              <p className="text-gray-300 mt-2">
                Years of Legacy
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-amber-400 text-4xl font-bold">
                500+
              </h3>

              <p className="text-gray-300 mt-2">
                Events Hosted
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-amber-400 text-4xl font-bold">
                100%
              </h3>

              <p className="text-gray-300 mt-2">
                Pure Vegetarian
              </p>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-amber-400 text-4xl font-bold">
                AC
              </h3>

              <p className="text-gray-300 mt-2">
                Family Dining
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;