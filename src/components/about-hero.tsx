"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PortfolioImage } from "@/components/portfolio-image";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ArrowRight, MapPin, Code2, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-8 sm:pt-36 sm:pb-24 overflow-hidden bg-grid-pattern">
      {/* Subtle ambient background */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-sky-500" />

              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-slate-100">
              Software Engineer
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-indigo-600 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400">
                Building Practical Digital Experiences
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {siteConfig.aboutSummary}
            </p>

            {/* Focus areas */}
            <div className="flex flex-wrap gap-3 mt-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-sm text-slate-700 dark:text-slate-300">
                <Code2 className="w-4 h-4 text-sky-500" />
                Frontend Web Development
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-sm text-slate-700 dark:text-slate-300">
                <Smartphone className="w-4 h-4 text-teal-500" />
                Mobile Development
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-indigo-500" />
              {siteConfig.location}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white text-sm font-medium shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                Let&apos;s Connect
              </Link>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/50 transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/50 transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-sky-500/30 rounded-tr-3xl pointer-events-none" />

              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-teal-500/30 rounded-bl-3xl pointer-events-none" />

              {/* Image frame */}
              <div className="relative aspect-[4/5] rounded-3xl p-2 bg-gradient-to-br from-sky-500/30 via-teal-500/20 to-indigo-500/30 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                  <PortfolioImage
                    src={siteConfig.images.profile}
                    fallbackSrc="/images/profile.svg"
                    alt={`${siteConfig.name} - Software Engineer`}
                    priority
                    type="profile"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Small information card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute -bottom-5 left-4 right-4 sm:left-8 sm:right-8 p-4 rounded-2xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500">
                      Specialization
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {siteConfig.specialization}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500">
                      Based In
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
