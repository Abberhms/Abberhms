"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function AboutCTA() {
  return (
    <section className="py-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              LET&apos;S WORK TOGETHER
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Let&apos;s build something great together.
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Have a project, product, or idea that needs a modern web or mobile
              experience? Let&apos;s talk about it.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white text-sm font-medium shadow-md shadow-sky-600/20 transition-all duration-200"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
