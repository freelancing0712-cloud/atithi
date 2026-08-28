import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import FamilySection from "./components/home/FamilySection";
import MenuShowcase from "./components/home/MenuShowcase";
import BanquetSection from "./components/home/BanquetSection";
import BookingSection from "./components/home/BookingSection";
import Testimonials from "./components/home/Testimonials";
import ContactSection from "./components/home/ContactSection";
import Modal from "./components/common/Modal";
import ReserveTableForm from "./components/forms/ReserveTableForm";
import FoodOrderForm from "./components/forms/FoodOrderForm";
import BanquetBookingForm from "./components/forms/BanquetBookingForm";
import { defaultAvailability } from "./data/siteConfig";

function App() {
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [foodModalOpen, setFoodModalOpen] = useState(false);
  const [banquetModalOpen, setBanquetModalOpen] = useState(false);
  const availability = defaultAvailability;

  return (
    <>
      <Navbar onOpenTable={() => setTableModalOpen(true)} onOpenFood={() => setFoodModalOpen(true)} onOpenBanquet={() => setBanquetModalOpen(true)} />
      <Hero onOpenTable={() => setTableModalOpen(true)} onOpenFood={() => setFoodModalOpen(true)} onOpenBanquet={() => setBanquetModalOpen(true)} />
      <About />
      <FamilySection />
      <MenuShowcase foodOrderingAvailable={availability.food} />
      <BanquetSection availability={availability.banquet} />
      <BookingSection availability={availability} />
      <Testimonials />
      <ContactSection />
      <Footer />
      
      <Modal open={tableModalOpenn} onClose={() => setTableModalOpen(false)} title="Reserve a Table">
        <ReserveTableForm availability={availability.table} onClose={() => setTableModalOpen(false)} />
      </Modal>

      <Modal open={foodModalOpen} onClose={() => setFoodModalOpen(false)} title="Order Food">
        <FoodOrderForm availability={availability.food} onClose={() => setFoodModalOpen(false)} />
      </Modal>

      <Modal open={banquetModalOpen} onClose={() => setBanquetModalOpen(false)} title="Book Banquet Hall">
        <BanquetBookingForm availability={availability.banquet} onClose={() => setBanquetModalOpen(false)} />
      </Modal>
    </>
  );
}

export default App;
