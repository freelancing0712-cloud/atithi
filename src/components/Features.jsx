import interiorImage from "../assets/images/interior-atithi.webp";

function Features() {
  return (
    <section className="bg-[#0b0b0b] py-32 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="text-amber-400 uppercase tracking-[6px] mb-4">
            Premium Experience
          </p>

          <h2 className="text-5xl md:text-7xl text-white font-serif">
            Family Dining &
            <span className="text-amber-400 italic">
              {" "}Celebrations
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Elegant interiors, comfortable seating and premium
            hospitality designed for memorable moments.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="group overflow-hidden rounded-3xl bg-[#111]">

            <div className="overflow-hidden">
              <img
                src={interiorImage}
                alt=""
                className="
                  h-80
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>

            <div className="p-8">

              <h3 className="text-white text-3xl font-serif mb-4">
                Family Dining
              </h3>

              <p className="text-gray-400 leading-8">
                Comfortable seating,
                warm ambience and authentic
                vegetarian cuisine for your family.
              </p>

            </div>

          </div>

          {/* Card 2 */}

          <div className="group overflow-hidden rounded-3xl bg-[#111]">

            <div className="overflow-hidden">
              <img
                src={interiorImage}
                alt=""
                className="
                  h-80
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>

            <div className="p-8">

              <h3 className="text-white text-3xl font-serif mb-4">
                Banquet Hall
              </h3>

              <p className="text-gray-400 leading-8">
                Birthdays, engagements,
                anniversaries and social events
                organised with elegance.
              </p>

            </div>

          </div>

          {/* Card 3 */}

          <div className="group overflow-hidden rounded-3xl bg-[#111]">

            <div className="overflow-hidden">
              <img
                src={interiorImage}
                alt=""
                className="
                  h-80
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />
            </div>

            <div className="p-8">

              <h3 className="text-white text-3xl font-serif mb-4">
                Premium Events
              </h3>

              <p className="text-gray-400 leading-8">
                Celebrate special occasions
                with curated hospitality and
                premium service.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;