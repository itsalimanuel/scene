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
import Partners from "@/components/sections/Partners";
import CEOMessage from "@/components/sections/CEOMessage";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SpecialtyStrip />
        <Partners />
        <About />
        <CEOMessage />
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
