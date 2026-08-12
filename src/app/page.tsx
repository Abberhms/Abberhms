import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { AboutCTA } from "@/components/about-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
      {/* 1. Sticky Translucent Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. CTA */}
        <AboutCTA />
      </main>

      {/* 9. Minimal Footer */}
      <Footer />
    </div>
  );
}
