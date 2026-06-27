import { useState } from "react";
import ReserveTableForm from "./forms/ReserveTableForm";
import heroImage from "../assets/images/hotel-atithi-front.webp";

function Hero() {
  const [showReservationForm, setShowReservationForm] = useState(false);
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20">

      <div className="relative z-10 flex flex-col justify-center min-h-screen pt-40 px-10 md:px-24">

        
        <div className="mb-6">

  <span className="glass px-5 py-2 rounded-full text-amber-300 text-sm tracking-[4px]">
    EST. 1998 • SOLAPUR
  </span>

</div>

<h1 className="luxury-title gold-gradient text-[7rem] md:text-[10rem] leading-[0.9] font-light tracking-tight">
  <span className="gold-glow">
    Atithi
  </span>
</h1>

       <h2 className="luxury-title text-white text-4xl md:text-6xl mt-6 max-w-4xl leading-tight font-light">

  <span>
  A Pure Vegetarian
  <span className="italic text-amber-300">
    {" "}love letter{" "}
  </span>
  to Solapur
</span>

</h2>

        <p className="luxury-text text-gray-300 mt-8 max-w-2xl text-xl leading-relaxed">
          Delicious food, family dining, banquet halls and memorable
          celebrations in the heart of Solapur.
        </p>

        
        <div className="flex gap-5 mt-10">

 <button
  onClick={() => setShowReservationForm(true)}
  className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-semibold transition"
>
  Reserve Table
</button>

  <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
    Explore Menu
  </button>

</div>

{/* ADD THIS BELOW THE BUTTONS */}

<div className="flex gap-10 mt-16">

  <div>
    <h3 className="text-5xl luxury-title text-amber-300">
      28+
    </h3>
    <p className="text-gray-300">
      Years Legacy
    </p>
  </div>

  <div>
    <h3 className="text-5xl luxury-title text-amber-300">
      1200+
    </h3>
    <p className="text-gray-300">
      Events Hosted
    </p>
  </div>

  <div>
  <h3 className="text-5xl luxury-title text-amber-300">
    Since 1998
  </h3>
  <p className="text-gray-300">
    Serving Solapur
  </p>
</div>

</div>
<div className="mt-16 max-w-xl">

  <div className="glass rounded-3xl p-8 border border-amber-500/20">

    <p className="text-amber-300 uppercase tracking-[4px] text-sm">
      Featured Experience
    </p>

    <h3 className="text-3xl text-white mt-3 luxury-title">
      Family Dining • Banquet Hall • Events
    </h3>

    <p className="text-gray-300 mt-4 leading-relaxed">
      Celebrate birthdays, engagements, family gatherings and memorable
      occasions with premium hospitality and pure vegetarian cuisine.
    </p>

  </div>

</div>
      </div>   {/* relative z-10 div */}

</div>   {/* absolute overlay div */}

{showReservationForm && (
  <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-5">

    <div className="relative w-full max-w-2xl">

      <button
        onClick={() => setShowReservationForm(false)}
        className="absolute top-3 right-4 text-white text-4xl z-10"
      >
        ×
      </button>

      <ReserveTableForm />

    </div>

  </div>
)}
</section>
  );
}

export default Hero;