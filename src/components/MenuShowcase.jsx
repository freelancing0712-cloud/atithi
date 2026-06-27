import interiorImage from "../assets/images/interior-atithi.webp";

function MenuShowcase() {
  return (
    <section className="bg-[#f4e1c1] py-28 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        <p className="text-amber-700 uppercase tracking-[5px] mb-4">
          Signature Collection
        </p>

        <h2 className="text-5xl md:text-7xl font-serif text-black">
          Plates that make
          <span className="italic text-amber-700">
            {" "}you hungry
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

            <img
              src={interiorImage}
              alt=""
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-serif">
                Solapuri Special Thali
              </h3>

              <p className="text-gray-600 mt-3">
                Traditional Maharashtrian taste
                with authentic flavours.
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

            <img
              src={interiorImage}
              alt=""
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-serif">
                Mysore Masala Dosa
              </h3>

              <p className="text-gray-600 mt-3">
                Crispy, buttery and perfectly
                prepared South Indian delight.
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

            <img
              src={interiorImage}
              alt=""
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-serif">
                Celebration Pangat
              </h3>

              <p className="text-gray-600 mt-3">
                Perfect arrangement for weddings,
                birthdays and special occasions.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MenuShowcase;