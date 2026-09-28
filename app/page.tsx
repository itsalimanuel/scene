import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import SpecialtyStrip from "@/components/sections/SpecialtyStrip";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import Focus from "@/components/sections/Focus";
import Products from "@/components/sections/Products";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SpecialtyStrip />
        <About />
        <Solutions />
        <Focus />
        <Products />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
