"use client";

import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Zap } from "lucide-react";

export default function Dollarization() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 overflow-hidden relative">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-900/60 border border-sky-700/50 rounded-full text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6">
              Dollarization Engine
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Water isn&apos;t just{" "}
              <span className="text-sky-400">gallons</span>.
              <br />
              It&apos;s money.
            </h2>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Etrenzik converts water flow into real dollar impact in real time.
              Every gallon flowing through your pipes has a price — and now
              you&apos;ll know exactly what it is.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Zap,
                  label: "Instant cost calculation",
                  desc: "See your spend update live as water flows.",
                },
                {
                  icon: TrendingDown,
                  label: "Usage cost trends",
                  desc: "Identify which days, hours, or units cost the most.",
                },
                {
                  icon: DollarSign,
                  label: "Projected monthly bill",
                  desc: "Know your water bill before the invoice arrives.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-900/60 border border-sky-700/40 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {item.label}
                      </div>
                      <div className="text-slate-400 text-sm mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Cost meter visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 backdrop-blur-sm">
              {/* Live cost display */}
              <div className="text-center mb-8">
                <div className="text-slate-400 text-sm uppercase tracking-widest mb-2">
                  Current Cost Rate
                </div>
                <div className="text-6xl font-black text-sky-400 tabular-nums">
                  $0.0042
                </div>
                <div className="text-slate-400 text-sm mt-1">per gallon</div>
              </div>

              {/* Flow animation */}
              <div className="relative h-12 bg-slate-900/80 rounded-xl overflow-hidden mb-6">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"
                />
                <div className="absolute inset-0 flex items-center justify-center text-sky-300 text-sm font-semibold">
                  4.2 gal / min flowing
                </div>
              </div>

              {/* Today's cost */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Today", value: "$3.84", change: "↓ 12%" },
                  { label: "This Month", value: "$94.20", change: "↓ 8%" },
                  {
                    label: "Projected Bill",
                    value: "$112.50",
                    change: "on track",
                  },
                  { label: "Savings YTD", value: "$284", change: "↑ vs avg" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/40"
                  >
                    <div className="text-slate-400 text-xs mb-1">
                      {s.label}
                    </div>
                    <div className="text-white font-bold text-lg">
                      {s.value}
                    </div>
                    <div className="text-emerald-400 text-xs mt-0.5">
                      {s.change}
                    </div>
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
