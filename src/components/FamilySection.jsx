import interiorImage from "../assets/images/interior-atithi.webp";

function FamilySection() {
  return (
    <section className="bg-black py-28 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        <p className="text-amber-400 uppercase tracking-[5px] mb-4">
          Family Experience
        </p>

        <h2 className="text-white text-5xl md:text-7xl font-serif">
          Designed for
          <span className="italic text-amber-400">
            {" "}Families
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl text-lg">
          Comfortable seating, elegant interiors and warm hospitality
          crafted for memorable family gatherings.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          <div className="overflow-hidden rounded-[30px] group">

            <img
              src={interiorImage}
              alt=""
              className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
            />

          </div>

          <div className="flex flex-col gap-8 justify-center">

            <div className="border border-amber-400/20 p-8 rounded-3xl hover:border-amber-400 transition">

              <h3 className="text-white text-3xl font-serif">
                Premium Seating
              </h3>

              <p className="text-gray-400 mt-4">
                Spacious and comfortable seating for families and groups.
              </p>

            </div>

            <div className="border border-amber-400/20 p-8 rounded-3xl hover:border-amber-400 transition">

              <h3 className="text-white text-3xl font-serif">
                Air Conditioned Hall
              </h3>

              <p className="text-gray-400 mt-4">
                Enjoy dining in a relaxing and pleasant atmosphere.
              </p>

            </div>

            <div className="border border-amber-400/20 p-8 rounded-3xl hover:border-amber-400 transition">

              <h3 className="text-white text-3xl font-serif">
                Perfect For Gatherings
              </h3>

              <p className="text-gray-400 mt-4">
                Birthdays, anniversaries and family celebrations.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FamilySection;