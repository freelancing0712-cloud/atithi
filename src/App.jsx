import { useEffect, useState } from "react";
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
import { MENU_KEY, SETTINGS_KEY, readStoredValue } from "./data/storage";
import { defaultMenuItems } from "./data/siteConfig";
import { normalizeMenuItems } from "./data/menu";

function App() {
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [foodModalOpen, setFoodModalOpen] = useState(false);
  const [banquetModalOpen, setBanquetModalOpen] = useState(false);
  const [availability, setAvailability] = useState(() => readStoredValue(SETTINGS_KEY, defaultAvailability));
  const [menuItems, setMenuItems] = useState(() => normalizeMenuItems(readStoredValue(MENU_KEY, defaultMenuItems), defaultMenuItems));

  useEffect(() => {
    const syncSiteState = () => {
      setAvailability(readStoredValue(SETTINGS_KEY, defaultAvailability));
      setMenuItems(normalizeMenuItems(readStoredValue(MENU_KEY, defaultMenuItems), defaultMenuItems));
    };

    window.addEventListener("storage", syncSiteState);
    window.addEventListener("atithi-menu-updated", syncSiteState);
    window.addEventListener("atithi-settings-updated", syncSiteState);

    return () => {
      window.removeEventListener("storage", syncSiteState);
      window.removeEventListener("atithi-menu-updated", syncSiteState);
      window.removeEventListener("atithi-settings-updated", syncSiteState);
    };
  }, []);

  return (
    <>
      <Navbar onOpenTable={() => setTableModalOpen(true)} onOpenFood={() => setFoodModalOpen(true)} onOpenBanquet={() => setBanquetModalOpen(true)} />
      <Hero onOpenTable={() => setTableModalOpen(true)} onOpenFood={() => setFoodModalOpen(true)} onOpenBanquet={() => setBanquetModalOpen(true)} />
      <About />
      <FamilySection />
      <MenuShowcase menuItems={menuItems} foodOrderingAvailable={availability.food} />
      <BanquetSection availability={availability.banquet} />
      <BookingSection availability={availability} menuItems={menuItems} />
      <Testimonials />
      <ContactSection />
      <Footer />

      <Modal open={tableModalOpen} onClose={() => setTableModalOpen(false)} title="Reserve a Table">
        <ReserveTableForm availability={availability.table} onClose={() => setTableModalOpen(false)} />
      </Modal>

      <Modal open={foodModalOpen} onClose={() => setFoodModalOpen(false)} title="Order Food">
        <FoodOrderForm availability={availability.food} menuItems={menuItems} onClose={() => setFoodModalOpen(false)} />
      </Modal>

      <Modal open={banquetModalOpen} onClose={() => setBanquetModalOpen(false)} title="Book Banquet Hall">
        <BanquetBookingForm availability={availability.banquet} onClose={() => setBanquetModalOpen(false)} />
      </Modal>
    </>
  );
}

export default App;
