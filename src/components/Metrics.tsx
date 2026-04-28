"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "25%",
    label: "Average reduction in water use",
    description:
      "Properties using Etrenzik reduce consumption through real-time awareness alone.",
    icon: "💧",
  },
  {
    value: "4×",
    label: "Faster leak detection",
    description:
      "Catch leaks in minutes, not months. Stop small drips before they become expensive repairs.",
    icon: "⚡",
  },
  {
    value: "60%",
    label: "Lower repair costs",
    description:
      "Early detection means fewer emergency repairs and dramatically lower maintenance bills.",
    icon: "🔧",
  },
  {
    value: "100%",
    label: "Billing transparency",
    description:
      "Every household receives an itemized bill based on their actual measured usage.",
    icon: "📊",
  },
];

export default function Metrics() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Results that speak{" "}
            <span className="gradient-text">for themselves.</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-xl mx-auto">
            Data from properties that switched to Etrenzik.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative bg-gradient-to-br from-white to-sky-50 rounded-2xl border border-sky-100 p-8 text-center shadow-sm overflow-hidden"
            >
              <div className="text-4xl mb-4">{m.icon}</div>
              <div className="text-5xl font-black gradient-text mb-2">
                {m.value}
              </div>
              <div className="text-slate-800 font-semibold text-sm mb-3">
                {m.label}
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
