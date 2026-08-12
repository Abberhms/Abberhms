import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import { AboutHero } from "@/components/about-hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { AboutCTA } from "@/components/about-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Sulaiman Abba Muhammad, a Software Engineer specializing in frontend web and mobile development with React.js, Next.js, React Native, TypeScript, and Redux Toolkit.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "Learn more about Sulaiman Abba Muhammad, a Software Engineer specializing in frontend web and mobile development.",
    url: `${siteConfig.url}/about`,
    type: "profile",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.images.profile}`,
        width: 1200,
        height: 1500,
        alt: `${siteConfig.name} - Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${siteConfig.name}`,
    description:
      "Learn more about Sulaiman Abba Muhammad, a Software Engineer specializing in frontend web and mobile development.",
    images: [`${siteConfig.url}${siteConfig.images.profile}`],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main>
        <AboutHero />

        <About />

        <Skills />

        <Experience />

        <Education />

        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
}
