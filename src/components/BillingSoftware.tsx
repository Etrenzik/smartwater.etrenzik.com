"use client";

import { motion } from "framer-motion";
import {
  SplitSquareHorizontal,
  Calculator,
  FileText,
  Mail,
  CreditCard,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

const sections = [
  {
    id: "A",
    icon: SplitSquareHorizontal,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
    title: "Multi-Home Flow Analysis",
    points: [
      "Monitors total flow from the master meter",
      "Individual flow patterns detected per home or unit",
      "Proprietary algorithms allocate proportional usage per household",
    ],
  },
  {
    id: "B",
    icon: Calculator,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    title: "Mathematical Billing Engine",
    formula: true,
    points: [
      "Import the total community bill (manual or via API)",
      "System calculates cost per gallon automatically",
      "Each household receives their exact proportional share",
    ],
  },
  {
    id: "C",
    icon: FileText,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    title: "Automated Bill Generation",
    points: [
      "Generate individual household invoices monthly",
      "Clean professional PDF + digital bills",
      "Transparent breakdown: usage, cost, and historical trends",
    ],
  },
  {
    id: "D",
    icon: Mail,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    title: "Email & Delivery System",
    points: [
      "Automatically email bills to each household",
      "Due date notifications and reminders",
      "Alerts for unpaid or overdue balances",
    ],
  },
  {
    id: "E",
    icon: CreditCard,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
    title: "Integrated Payment Portal",
    points: [
      "Built-in secure payment — credit cards & ACH",
      "Monthly recurring billing support",
      "Dashboard for property managers to track collections",
    ],
  },
  {
    id: "F",
    icon: LayoutDashboard,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    title: "Admin Dashboard",
    points: [
      "View all properties, units, and payment status",
      "Track delinquencies and export reports",
      "Adjust billing rules per community as needed",
    ],
  },
];

export default function BillingSoftware() {
  return (
    <section id="software" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Community Billing Platform
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto">
            From one meter to{" "}
            <span className="gradient-text">individual bills</span> — fully
            automated.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-center text-xl text-slate-500 max-w-2xl mx-auto mb-16"
        >
          Etrenzik solves one of the hardest problems in shared water systems:
          how do you fairly split a single master water bill across multiple
          homes or tenants?
        </motion.p>

        {/* Formula callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16 bg-gradient-to-br from-slate-900 to-sky-950 rounded-2xl p-8 text-center shadow-2xl"
        >
          <div className="text-slate-400 text-sm uppercase tracking-widest mb-4">
            The Formula
          </div>
          <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Individual Cost ={" "}
            <span className="text-sky-400">
              (House Flow ÷ Total Flow) × Total Bill
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-3">
            Transparent, fair, and calculated automatically every billing cycle.
          </p>
        </motion.div>

        {/* Feature sections grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`bg-white rounded-2xl border ${s.border} p-7 shadow-sm card-hover`}
              >
                {/* Label */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center`}
                  >
                    <Icon size={20} className={s.color} />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${s.color}`}
                  >
                    Module {s.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {s.title}
                </h3>

                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={15}
                        className="text-sky-500 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-slate-500 text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Sample bill visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl border border-slate-100 p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Sample Monthly Bill
            </h3>
            <p className="text-slate-500 mt-2 text-sm">
              Each household receives a clear, itemized statement
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            {/* Bill header */}
            <div className="bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-80">Etrenzik Water Bill</div>
                  <div className="text-xl font-bold mt-0.5">
                    Maple Grove HOA — Unit 3
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black">$73.84</div>
                  <div className="text-sm opacity-80">Due Apr 15, 2026</div>
                </div>
              </div>
            </div>

            {/* Bill body */}
            <div className="p-6">
              <div className="space-y-3">
                {[
                  { label: "Total community usage", value: "18,420 gal" },
                  { label: "Your unit usage", value: "4,789 gal (26%)" },
                  { label: "Community master bill", value: "$284.00" },
                  { label: "Your proportional share", value: "$73.84" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex justify-between text-sm border-b border-slate-50 pb-2.5"
                  >
                    <span className="text-slate-500">{r.label}</span>
                    <span className="font-semibold text-slate-800">
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button className="flex-1 px-4 py-2.5 bg-sky-500 text-white text-sm font-semibold rounded-xl hover:bg-sky-600 transition-colors">
                  Pay Now
                </button>
                <button className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                  View History
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
