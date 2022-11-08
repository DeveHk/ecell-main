import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Sponsers from "@/components/Sponsers";

export default function Home() {
  return (
    <div className="bg-white">
      <AboutUs />
      <Sponsers/>
      <Events />
      <ContactUs/>
      <Footer/>
    </div>
  );
}
