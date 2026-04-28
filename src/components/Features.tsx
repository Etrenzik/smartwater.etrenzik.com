"use client";

import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Flower2,
  Building2,
  Brain,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "See gallons-per-minute, daily totals, and live cost projections updated every second — from any device.",
    color: "bg-sky-50 text-sky-600",
    border: "border-sky-100",
  },
  {
    icon: AlertTriangle,
    title: "Leak Detection & Alerts",
    description:
      "Etrenzik's AI flags anomalies instantly. Get SMS or email alerts before a small drip becomes an expensive repair.",
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100",
  },
  {
    icon: Flower2,
    title: "Irrigation Monitoring",
    description:
      "Track outdoor irrigation separately. See how much your landscaping actually costs and optimize watering schedules.",
    color: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: Building2,
    title: "Multi-Property Support",
    description:
      "Manage dozens of properties from a single dashboard. Expand with no additional infrastructure.",
    color: "bg-violet-50 text-violet-600",
    border: "border-violet-100",
  },
  {
    icon: Brain,
    title: "AI Usage Learning",
    description:
      "The platform learns your property's normal usage patterns and proactively surfaces savings opportunities.",
    color: "bg-pink-50 text-pink-600",
    border: "border-pink-100",
  },
  {
    icon: Gauge,
    title: "Universal Pipe Compatibility",
    description:
      'Clamp-on design works on copper, PVC, CPVC, and steel pipes from ½\" to 4\" diameter.',
    color: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Platform Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">understand your water.</span>
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Hardware precision meets intelligent software — giving you complete
            visibility over every drop.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative bg-white rounded-2xl p-7 border ${f.border} shadow-sm card-hover cursor-default`}
              >
                <div
                  className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
