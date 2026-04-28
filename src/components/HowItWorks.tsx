"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "🔩",
    title: "Clamp",
    description:
      "Attach the Etrenzik sensor to any existing pipe. Works on pipes ½″ to 2″.",
    detail: "Etrenzik installation",
  },
  {
    number: "02",
    icon: "📡",
    title: "Connect",
    description:
      "The device syncs instantly to the Etrenzik cloud platform over Wi-Fi or cellular. Your dashboard is live within seconds of power-up.",
    detail: "Wi-Fi & cellular ready",
  },
  {
    number: "03",
    icon: "📈",
    title: "Understand",
    description:
      "See real-time flow data, usage trends, cost projections, and instant leak alerts. Your water — translated into clear financial insight.",
    detail: "Actionable insights",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Simple Setup
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let us get you{" "}
            <span className="gradient-text">up and running.</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Works across residential, commercial, and community water systems.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-sky-200 via-sky-400 to-sky-200" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm card-hover">
                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-sky-200 mb-6">
                  {step.icon}
                </div>

                {/* Step number */}
                <div className="text-6xl font-black text-slate-300 absolute top-6 right-6 leading-none select-none">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {step.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-full">
                  ✓ {step.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
