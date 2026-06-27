function Footer() {
  return (
    <footer className="bg-black border-t border-amber-500/20 text-white py-20 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Logo */}

        <div>

          <h2 className="text-5xl font-serif text-amber-300">
            Atithi
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Serving authentic vegetarian cuisine in Solapur
            since 1998 with premium hospitality and memorable
            dining experiences.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-amber-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-amber-400 cursor-pointer">
              Menu
            </li>

            <li className="hover:text-amber-400 cursor-pointer">
              Family Sector
            </li>

            <li className="hover:text-amber-400 cursor-pointer">
              Banquet
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>
              South Sadar Bazar,
              Solapur
            </p>

            <p>
              +91 XXXXXXXXXX
            </p>

            <p>
              info@atithi.com
            </p>

          </div>

        </div>

        {/* Timing */}

        <div>

          <h3 className="text-xl font-semibold mb-6">
            Opening Hours
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>
              Monday - Sunday
            </p>

            <p>
              11:00 AM - 11:00 PM
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-amber-500/20 mt-16 pt-8 text-center text-gray-500">

        © 2025 Atithi Pure Veg Restaurant.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;