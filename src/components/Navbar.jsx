function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-5xl font-serif text-amber-100">
          Atithi
        </h1>

        <ul className="hidden md:flex gap-12 text-white font-medium">
          <li className="hover:text-amber-400 transition">Home</li>
          <li className="hover:text-amber-400 transition">Menu</li>
          <li className="hover:text-amber-400 transition">Family Sector</li>
          <li className="hover:text-amber-400 transition">Banquet</li>
          <li className="hover:text-amber-400 transition">Contact</li>
        </ul>

        <button
          className="
          bg-gradient-to-r
          from-amber-500
          to-orange-500
          text-black
          px-7
          py-3
          rounded-full
          font-semibold
          hover:scale-105
          transition
          "
        >
          Reserve Table
        </button>

      </div>
    </nav>
  );
}

export default Navbar;