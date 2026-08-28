import { Link } from "react-scroll";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { OWNER_PHONE_DISPLAY, OWNER_WHATSAPP_NUMBER, hotelInfo, socialLinks } from "../../data/siteConfig";

function Footer() {
  const quickLinks = [
    ["Home", "hero"],
    ["About", "about"],
    ["Menu", "menu"],
    ["Banquet", "banquet"],
    ["Booking", "booking"],
    ["Contact", "contact"],
  ];

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="site-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="gold-gradient text-5xl font-bold">Atithi</h2>
            <p className="mt-6 leading-8 text-gray-400">
              Premium pure vegetarian dining, family hospitality, food ordering and banquet celebrations in Solapur.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-2xl text-white">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              {quickLinks.map(([label, target]) => (
                <li key={target}>
                  <Link to={target} smooth={true} duration={700} offset={-90} className="cursor-pointer transition hover:text-amber-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-2xl text-white">Contact</h3>
            <div className="space-y-5 text-gray-400">
              <div className="flex gap-4">
                <FaPhoneAlt className="mt-1 text-amber-400" />
                <a href={`tel:+${OWNER_WHATSAPP_NUMBER}`} className="transition hover:text-amber-300">{OWNER_PHONE_DISPLAY}</a>
              </div>
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-amber-400" />
                <span>{hotelInfo.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl text-white">Connect</h3>
            <div className="flex gap-5">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <div className="glass flex h-14 w-14 items-center justify-center rounded-full transition hover:bg-amber-400 hover:text-black">
                    <FaFacebookF />
                  </div>
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <div className="glass flex h-14 w-14 items-center justify-center rounded-full transition hover:bg-amber-400 hover:text-black">
                    <FaInstagram />
                  </div>
                </a>
              )}
              <a href={`https://wa.me/${OWNER_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <div className="glass flex h-14 w-14 items-center justify-center rounded-full transition hover:bg-amber-400 hover:text-black">
                  <FaWhatsapp />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-gray-400 md:text-left">
            Copyright {new Date().getFullYear()} Hotel Atithi. All Rights Reserved.
          </p>
          <Link to="hero" smooth={true} duration={700} className="btn-primary cursor-pointer">
            Back To Top
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
