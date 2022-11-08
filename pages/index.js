import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <AboutUs />
      <Events />
      <ContactUs/>
      <Footer/>
    </div>
  );
}
