import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import HowItWorks from "@/components/HowItWorks";
import BookingDialog from "@/components/BookingDialog";
import Footer from "@/components/Footer";
import useCars from "@/hooks/useCars";
import type { Car } from "@/data/cars";

const Index = () => {
  const { cars } = useCars();
  const [bookingCar, setBookingCar] = useState<Car | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CatalogSection cars={cars} onBook={setBookingCar} />
      <HowItWorks />
      <Footer />
      <BookingDialog
        car={bookingCar}
        open={!!bookingCar}
        onClose={() => setBookingCar(null)}
      />
    </div>
  );
};

export default Index;
