import Home from "@/components/main/Home";
import Intro from "@/components/main/Intro";
import TechStack from "@/components/main/TechStack";
import Work from "@/components/main/Work";

export default function HomePage() {
  return (
    <main className="md:h-screen md:snap-y md:snap-mandatory md:overflow-scroll md:scroll-smooth md:overscroll-y-contain md:scrollbar-hide">
      <section className="md:snap-start md:min-h-screen bg-white">
        <Home />
      </section>
      <section className="md:snap-start md:min-h-screen bg-blue">
        <Intro />
      </section>
      <section className="md:snap-start md:bg-white">
        <TechStack />
      </section>
      <section className="md:snap-start md:min-h-screen bg-white">
        <Work />
      </section>
    </main>
  );
}
