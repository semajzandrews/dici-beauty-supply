import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Counter from "./components/Counter";
import Index from "./components/Index";
import Bands from "./components/Bands";
import Hours from "./components/Hours";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Page() {
  return (
    <>
      <Reveal />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Counter />
        <Index />
        <Bands />
        <Hours />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
