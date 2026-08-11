"use client";

import { GithubIcon } from "@/components/icons";
import {
  ExternalLink,
  ArrowUpRight,
  Smartphone,
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const projectIcons = {
  "kanomart-mobile": Smartphone,
  "cashapp-web": Globe,
  "focus-legal-consult": ShieldCheck,
};

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-100/40 dark:bg-slate-900/30 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            04. FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
            A showcase of web and mobile products engineered with modern
            frameworks, robust state management, and API integrations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mt-3" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project, idx) => {
            const IconComp =
              projectIcons[project.id as keyof typeof projectIcons] || Globe;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300"
              >
                {/* Visual Preview Header Container */}
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
                  <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all duration-500" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-sky-950/80 border border-sky-800/80 text-sky-300">
                      {project.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-200">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Project Title overlay */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-sky-300 transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-sky-400" />
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6 space-y-2">
                      <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 gap-1.5">
                        {project.highlights.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Code Repository
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
