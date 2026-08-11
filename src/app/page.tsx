import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
      {/* 1. Sticky Translucent Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Experience Section */}
        <Experience />

        {/* 6. Projects Section */}
        <Projects />

        {/* 7. Education Section */}
        <Education />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* 9. Minimal Footer */}
      <Footer />
    </div>
  );
}
