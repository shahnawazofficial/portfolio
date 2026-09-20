import { Toaster } from "sonner";
import { Bloom } from "./Bloom";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Services } from "./Services";
import { Process } from "./Process";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Bloom />

      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to work
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <Toaster theme="light" position="top-center" richColors />
    </div>
  );
}
