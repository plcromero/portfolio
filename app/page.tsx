import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackTicker from "@/components/StackTicker";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollProgress from "@/components/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <StackTicker />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
