"use client";

import { siteConfig } from "@/config/site";
import { PortfolioImage } from "@/components/portfolio-image";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Globe,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            01. ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Engineering User-Centric Digital Products
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Container (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-4/5 rounded-3xl p-2 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                <PortfolioImage
                  src={siteConfig.images.about}
                  fallbackSrc="/images/about.svg"
                  alt={`Sulaiman Abba Muhammad - About section image`}
                  type="about"
                  className="w-full h-full min-h-[380px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Quick Facts (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I am a Software Engineer based in Kano, Nigeria, dedicated to
              crafting high-performance, responsive web applications and
              cross-platform mobile solutions. My approach blends rigorous
              software engineering principles with intuitive UI implementation.
            </p>

            {/* Specialized Competencies List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <Globe className="w-4 h-4 text-sky-500 shrink-0" />
                Responsive Web Applications
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <Smartphone className="w-4 h-4 text-teal-500 shrink-0" />
                Cross-Platform Mobile (React Native)
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <Layers className="w-4 h-4 text-indigo-500 shrink-0" />
                RESTful API &amp; State Management
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                JWT Authentication &amp; Security
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                Performance Optimization
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                Clean &amp; Scalable Architecture
              </div>
            </div>

            {/* Quick Facts Card Area */}
            <div className="w-full p-5 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                Quick Facts
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                {siteConfig.quickFacts.map((fact) => (
                  <div key={fact.label} className="flex flex-col">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {fact.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
