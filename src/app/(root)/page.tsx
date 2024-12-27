import Home from "@/components/main/Home";
import Intro from "@/components/main/Intro";
import TechStack from "@/components/main/TechStack";
import Work from "@/components/main/Work";

export default function HomePage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth overscroll-y-contain scrollbar-hide">
      <section className="snap-start min-h-screen bg-white">
        <Home />
      </section>
      <section className="snap-start min-h-screen bg-blue">
        <Intro />
      </section>
      <section className="snap-start bg-white">
        <TechStack />
      </section>
      <section className="snap-start min-h-screen bg-white">
        <Work />
      </section>
    </main>
  );
}
