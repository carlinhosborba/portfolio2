import { Contact } from "./components/contact";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Sobre } from "./components/sobre";
import { GalaxyBackground } from "./components/galaxy";

export default function Home() {
  return (
    <GalaxyBackground>
      <Navbar />
      <Hero />
      <Sobre />
      <Skills />
      <Projects />
      <Contact />
    </GalaxyBackground>
  );
}
