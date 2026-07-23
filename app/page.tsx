import Hero from "./components/hero";
import Features from "./components/features";

export default function Home() {
  return (
    <div id="scroll-container" className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start h-screen">
        <Hero />
      </section>
      <section className="snap-start">
        <Features />
      </section>
    </div>
  );
}