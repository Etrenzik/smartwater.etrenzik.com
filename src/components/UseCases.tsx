"use client";

import { motion } from "framer-motion";
import { Home, Users, TreePine, Building2, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Residential Homes",
    description:
      "Monitor household usage, detect leaks early, and understand your water costs with zero installation hassle.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: Users,
    title: "HOA & Community Systems",
    description:
      "Split shared water bills fairly across every unit. Automated billing eliminates disputes and manual calculations.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: TreePine,
    title: "Mobile Home Parks",
    description:
      "Give every resident a clear, itemized bill based on their actual usage — not estimated averages.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Building2,
    title: "Multi-Family Housing",
    description:
      "Landlords and property managers get automatic per-unit billing with no extra staff or manual reading.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Briefcase,
    title: "Commercial Properties",
    description:
      "Track water costs by zone, department, or tenant. Build detailed reports for sustainability audits.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-slate-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Who It&apos;s For
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for every{" "}
            <span className="gradient-text">type of property.</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            From a single home to a 200-unit community — Etrenzik scales
            effortlessly.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((u, i) => {
            const Icon = u.icon;
            return (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm card-hover"
              >
                <div
                  className={`w-12 h-12 ${u.bg} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon size={22} className={u.color} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {u.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {u.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
