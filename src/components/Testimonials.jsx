function Testimonials() {
  return (
    <section className="bg-[#f6efe3] py-28 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        <p className="text-center uppercase tracking-[4px] text-gray-500 mb-4">
          Guest Reviews
        </p>

        <h2 className="text-center text-5xl md:text-7xl font-serif">
          Stories
          <span className="italic text-amber-600">
            {" "}shared
          </span>
          {" "}at our table.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <div className="text-amber-500 text-3xl">
              ❝
            </div>

            <p className="text-gray-700 mt-4">
              The pure vegetarian food was amazing and the
              ambience was perfect for family dining.
            </p>

            <h4 className="mt-6 font-semibold">
              Anaya Deshmukh
            </h4>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <div className="text-amber-500 text-3xl">
              ❝
            </div>

            <p className="text-gray-700 mt-4">
              We celebrated our daughter's birthday here.
              Everything was perfectly managed.
            </p>

            <h4 className="mt-6 font-semibold">
              Ramesh Patil
            </h4>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <div className="text-amber-500 text-3xl">
              ❝
            </div>

            <p className="text-gray-700 mt-4">
              One of the best family restaurants in Solapur.
              Delicious food and excellent service.
            </p>

            <h4 className="mt-6 font-semibold">
              S. Iyer
            </h4>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;