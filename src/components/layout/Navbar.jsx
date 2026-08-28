import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { OWNER_WHATSAPP_NUMBER } from "../../data/siteConfig";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Menu", to: "menu" },
    { name: "Banquet", to: "banquet" },
    { name: "Booking", to: "booking" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-amber-300/10 bg-[#060504]/88 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-[0.18em] text-amber-100 sm:text-4xl">ATITHI</h1>
          <p className="mt-1 text-[9px] uppercase tracking-[3px] text-amber-300/90 sm:text-[10px]">
            Veg Dining | Banquet
          </p>
        </div>

        <ul className="hidden items-center gap-7 text-sm font-semibold text-stone-200 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth={true}
                duration={250}
                offset={-82}
                className="cursor-pointer transition duration-200 hover:text-amber-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <a href={`https://wa.me/${OWNER_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hidden lg:block">
          <button className="btn-primary flex items-center gap-3">
            <FaPhoneAlt />
            Call Now
          </button>
        </a>

        <div className="cursor-pointer text-2xl text-white lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <div className="site-container border-t border-white/10 bg-black/95 py-7 lg:hidden">
          <ul className="flex flex-col gap-6 text-center text-lg text-white">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={250}
                  offset={-82}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:text-amber-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a href={`https://wa.me/${OWNER_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                <button className="btn-primary">WhatsApp Owner</button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
