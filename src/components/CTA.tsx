"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 rounded-3xl p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-900/60 border border-sky-700/40 rounded-full text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6">
              Get Started Today
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Take control of your water
              <br />
              <span className="text-sky-400">and your costs.</span>
            </h2>

            <p className="mt-6 text-xl text-slate-300 max-w-xl mx-auto">
              Join hundreds of property managers, HOAs, and homeowners who use
              Etrenzik to eliminate billing guesswork and stop wasting water.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="mailto:sales@etrenzik.com"
                className="group flex items-center gap-2.5 px-7 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl shadow-lg shadow-sky-900/30 transition-all"
              >
                Get Etrenzik
                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:sales@etrenzik.com?subject=Demo Request"
                className="group flex items-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl transition-all"
              >
                <CalendarCheck size={17} />
                Schedule a Demo
              </a>
            </div>

            <p className="mt-6 text-slate-400 text-sm">
              No long-term contracts. Hardware ships in 3–5 days.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
