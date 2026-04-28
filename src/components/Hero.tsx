"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const badges = [
  "No plumbing required",
  "Real-time alerts",
  "AI-powered insights",
];

export default function Hero() {
  return (
    <section className="relative hero-gradient overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
              Smart Water Intelligence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight"
            >
              Smart Water{" "}
              <span className="gradient-text">Intelligence</span>
              <br />
              for Every Property.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 text-xl text-slate-500 leading-relaxed max-w-lg"
            >
              Let us get you up and running. Monitor in real time. Turn water flow into
              financial control — from a single home to an entire community.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-sm text-slate-600"
                >
                  <CheckCircle2 size={15} className="text-sky-500" />
                  {b}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#cta"
                className="group flex items-center gap-2 px-6 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-lg shadow-sky-200 hover:shadow-sky-300 transition-all"
              >
                Get Started
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#how-it-works"
                className="group flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all"
              >
                <Play size={15} className="text-sky-500 fill-sky-500" />
                See How It Works
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-4 text-sm text-slate-400"
            >
              <div className="flex -space-x-2">
                {["#0ea5e9", "#6366f1", "#10b981", "#f59e0b", "#ef4444"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      style={{ backgroundColor: c }}
                    />
                  )
                )}
              </div>
              <span>
                Trusted by{" "}
                <strong className="text-slate-600 font-semibold">500+</strong>{" "}
                property managers
              </span>
            </motion.div>
          </div>

          {/* Right: Dashboard mock */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Floating card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -left-6 z-10 bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <span className="text-xl">💧</span>
              </div>
              <div>
                <div className="text-xs text-slate-500">Flow Rate</div>
                <div className="text-sm font-bold text-slate-800">
                  4.2 gal/min
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 z-10 bg-white rounded-2xl shadow-xl border border-slate-100 p-3.5 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <div className="text-xs text-slate-500">Monthly Savings</div>
                <div className="text-sm font-bold text-emerald-600">
                  −$142.50
                </div>
              </div>
            </motion.div>

            {/* Main dashboard card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-float">
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-3 flex-1 bg-slate-100 rounded h-5 text-xs text-slate-400 flex items-center px-3">
                  app.etrenzik.com
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                      Maple Grove HOA
                    </div>
                    <div className="text-lg font-bold text-slate-800 mt-0.5">
                      Water Overview
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                    Live
                  </span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    {
                      label: "Total Usage",
                      value: "18,420",
                      unit: "gal",
                      color: "text-sky-600",
                    },
                    {
                      label: "Master Bill",
                      value: "$284",
                      unit: "/mo",
                      color: "text-slate-800",
                    },
                    {
                      label: "Leak Score",
                      value: "0",
                      unit: "alerts",
                      color: "text-emerald-600",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-slate-50 rounded-xl p-3 text-center"
                    >
                      <div className={`text-lg font-bold ${s.color}`}>
                        {s.value}
                        <span className="text-xs font-medium text-slate-400">
                          {s.unit}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div className="mb-4">
                  <div className="text-xs text-slate-400 mb-2 font-medium">
                    Usage by unit — this month
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[65, 80, 45, 90, 55, 70, 38, 85].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          backgroundColor:
                            i === 3 ? "#0ea5e9" : "#e0f2fe",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Unit breakdown */}
                {[
                  { unit: "Unit 1 – Johnson", pct: 22, cost: "$62.48" },
                  { unit: "Unit 2 – Martinez", pct: 18, cost: "$51.12" },
                  { unit: "Unit 3 – Williams", pct: 26, cost: "$73.84" },
                ].map((r) => (
                  <div key={r.unit} className="flex items-center gap-3 mb-2.5">
                    <div className="text-xs text-slate-500 w-36 truncate">
                      {r.unit}
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                      <div
                        className="bg-sky-500 h-1.5 rounded-full"
                        style={{ width: `${r.pct * 2.5}%` }}
                      />
                    </div>
                    <div className="text-xs font-semibold text-slate-700 w-12 text-right">
                      {r.cost}
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
