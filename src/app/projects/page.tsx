"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Globe,
  ShieldCheck,
  GraduationCap,
  Camera,
  Building2,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    id: "kanomart-mobile",
    title: "KanoMart Mobile",
    category: "Mobile Application",
    icon: Smartphone,
    description:
      "Cross-platform e-commerce mobile application built with React Native and Expo.",
    tech: ["React Native", "Expo", "Redux Toolkit", "RTK Query"],
    highlights: [
      "Authentication",
      "RESTful API integration",
      "Redux Toolkit / RTK Query state management",
      "Reusable responsive mobile UI",
    ],
    github: "https://github.com/abberhms",
    live: null,
  },
  {
    id: "cashapp",
    title: "CashApp",
    category: "Financial Web Application",
    icon: Wallet,
    description:
      "Secure frontend fintech application currently in development, focused on authentication, transaction management, and responsive financial dashboards.",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    highlights: [
      "JWT authentication",
      "Login, registration, and protected routes",
      "RESTful API integration",
      "Responsive financial dashboards",
      "Dark mode support",
    ],
    github: "https://github.com/abberhms",
    live: null,
  },
  {
    id: "focus-legal-consult",
    title: "Focus Legal Consult",
    category: "Law Firm Website",
    icon: ShieldCheck,
    description:
      "Professional, SEO-optimized website developed for a legal consulting business.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "SEO-optimized architecture",
      "Attorneys and Practice Areas pages",
      "Responsive layouts",
      "Dark / light mode",
      "Open Graph and metadata optimization",
      "Production deployment on Vercel",
    ],
    github: null,
    live: "https://www.focuslegalconsult.com.ng",
  },
  {
    id: "nasara-academy",
    title: "Nasara Academy",
    category: "School Website",
    icon: GraduationCap,
    description:
      "Premium responsive website developed for a primary and secondary school, providing a structured digital presence for students, parents, and visitors.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Academics pages",
      "Admissions information",
      "Gallery",
      "Alumni section",
      "News and Events",
      "Contact section",
      "Responsive and accessible UX",
    ],
    github: null,
    live: "https://nasara-academy.vercel.app/",
  },
  {
    id: "zoom-media",
    title: "Zoom Media Production Studios",
    category: "Creative Agency Website",
    icon: Camera,
    description:
      "Visually immersive website developed for a media production agency showcasing photography, visual content, content creation, and AI media services.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Portfolio-driven layouts",
      "Photography and visual showcase",
      "Content creation services",
      "AI media services",
      "Dark / light mode",
      "Smooth UI interactions",
      "Responsive performance-focused design",
    ],
    github: null,
    live: "https://zoom-media-production-studios.vercel.app/",
  },
  {
    id: "voostech",
    title: "Voostech",
    category: "Website Optimization",
    icon: Building2,
    description:
      "Frontend UX/UI optimization contribution focused on improving navigation, conversion flow, responsiveness, and overall usability.",
    tech: ["UX/UI", "Frontend", "Responsive Design", "Conversion Optimization"],
    highlights: [
      "Frontend UX/UI assessment",
      "Navigation improvements",
      "CTA hierarchy recommendations",
      "Responsive design improvements",
      "Mobile experience optimization",
      "Service presentation improvements",
    ],
    github: null,
    live: null,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 bg-grid-pattern">
          {/* Ambient background glow */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-sky-500/10 dark:bg-sky-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
                PROJECTS
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight max-w-4xl">
                Selected Work &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-indigo-600 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400">
                  Engineering Projects
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                A collection of web applications, mobile products, corporate
                websites, and digital experiences I have built or contributed to
                using modern technologies.
              </p>

              <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mt-8" />
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => {
                const IconComponent = project.icon;

                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.08,
                    }}
                    className="group flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300"
                  >
                    {/* Project Preview */}
                    <div className="relative h-52 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
                      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

                      <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all duration-500" />

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-sky-950/80 border border-sky-800/80 text-sky-300">
                          {project.category}
                        </span>

                        <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-200">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                          {project.title}

                          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-sky-400" />
                        </h2>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow">
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-7">
                        <h3 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                          Highlights
                        </h3>

                        <div className="space-y-2">
                          {project.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technology */}
                      <div className="mt-auto">
                        <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tech.map((technology) => (
                              <span
                                key={technology}
                                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                              >
                                {technology}
                              </span>
                            ))}
                          </div>

                          {/* Project Links */}
                          <div className="flex items-center gap-4">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                              >
                                <GithubIcon className="w-4 h-4" />
                                Code
                              </a>
                            )}

                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Live Site
                              </a>
                            )}

                            {!project.github && !project.live && (
                              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                                Contribution / Internal Project
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
                HAVE A PROJECT IN MIND?
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
                Let&apos;s build something great together.
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Whether it&apos;s a web application, mobile product, or digital
                experience, I&apos;m always open to interesting engineering
                challenges.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-medium text-sm shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all duration-200"
              >
                Let&apos;s Connect
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
