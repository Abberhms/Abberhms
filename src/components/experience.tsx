"use client";

import { siteConfig } from "@/config/site";
import { Briefcase, Calendar, Building2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            03. CAREER HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-teal-500 rounded-full mt-3" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-12">
          {siteConfig.experience.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.isCurrent
                    ? "bg-sky-500 border-sky-300 dark:border-sky-900 shadow-md shadow-sky-500/50"
                    : "bg-slate-300 dark:bg-slate-700 border-slate-100 dark:border-slate-900"
                }`}
              />

              {/* Card Container */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-xs transition-all duration-200 ${
                  exp.isCurrent
                    ? "bg-white dark:bg-slate-900/90 border-sky-500/40 dark:border-sky-500/30 shadow-lg shadow-sky-500/5"
                    : "bg-white/60 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <Building2 className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {exp.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
