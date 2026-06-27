function ContactSection() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        <p className="text-amber-400 uppercase tracking-[5px] mb-4">
          Visit Us
        </p>

        <h2 className="text-white text-5xl md:text-7xl font-serif">
          Plan your visit,
          <span className="italic text-amber-400">
            {" "}or celebration.
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mt-20">

          {/* LEFT */}

          <div>

            <h3 className="text-3xl text-white font-serif mb-8">
              Atithi Pure Veg Restaurant
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-amber-400 uppercase tracking-[3px]">
                  Address
                </p>

                <p className="text-gray-300 mt-2">
                     No 1001, North Kasaba,
                     Balives Road,
                     Solapur - 413002,
                     Maharashtra
                </p>
              </div>

              <div>
                <p className="text-amber-400 uppercase tracking-[3px]">
                  Phone
                </p>

                <p className="text-gray-300 mt-2">
                  8007614615
                </p>
              </div>

              <div>
                <p className="text-amber-400 uppercase tracking-[3px]">
                  Timings
                </p>

                <p className="text-gray-300 mt-2">
                  Daily : 11:00 AM – 11:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-black border border-amber-500/20 rounded-[30px] p-10">

           <a
 href="https://wa.me/918007614615?text=Hello%20Atithi,%20I%20want%20to%20reserve%20a%20table."
 target="_blank"
 rel="noreferrer"
 className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-semibold transition"
>
 Reserve Table
</a>

            <p className="text-gray-400 mt-4">
              Book your family dinner, birthday party
              or special celebration.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
  href="https://wa.me/918007614615?text=Hello%20Atithi,%20I%20want%20to%20reserve%20a%20table."
  target="_blank"
  rel="noreferrer"
  className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-semibold transition"
>
  Reserve Table
</a>

              <a
  href="tel:8007614615"
  className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
>
  Call Now
</a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;