"use client";

import { siteConfig } from "@/config/site";
import { GraduationCap, Award, ShieldCheck, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            05. ACADEMICS &amp; CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Education &amp; Professional Qualifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Academic Degrees (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-500" /> Academic Degrees
            </h3>

            {siteConfig.education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs shadow-xs hover:border-sky-500/40 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold self-start sm:self-auto border border-sky-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Academic Standard
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                    <BookOpen className="w-3.5 h-3.5" />
                    {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Professional Trainings & Memberships (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Trainings & Certifications */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-500" /> Trainings &amp; Certifications
              </h3>
              <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs space-y-3">
                {siteConfig.trainings.map((item, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Memberships */}
            <div>
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-500" /> Professional Bodies
              </h3>
              <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xs space-y-3">
                {siteConfig.memberships.map((mem, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                    <span>{mem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
