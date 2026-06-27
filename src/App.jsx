import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import MenuShowcase from "./components/MenuShowcase";
import FamilySection from "./components/FamilySection";
import BanquetSection from "./components/BanquetSection";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuShowcase />
      <FamilySection />
      <BanquetSection />
      <Testimonials />
      <Stats />
      <ContactSection />
      <Footer />
      
    </>
  );
}

export default App;