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
  Droplets,
  Send,
  CheckCheck,
  TrendingUp,
} from "lucide-react";

// ── Animated pipeline diagram ────────────────────────────────────────────────
const pipelineSteps = [
  { icon: Droplets,              label: "Master Meter",   dot: "bg-sky-500",     ring: "ring-sky-200"    },
  { icon: SplitSquareHorizontal, label: "Flow Analysis",  dot: "bg-violet-500",  ring: "ring-violet-200" },
  { icon: Calculator,            label: "Billing Engine", dot: "bg-indigo-500",  ring: "ring-indigo-200" },
  { icon: FileText,              label: "Bill Created",   dot: "bg-emerald-500", ring: "ring-emerald-200" },
  { icon: Send,                  label: "Delivered",      dot: "bg-amber-500",   ring: "ring-amber-200"  },
];

function PipelineDiagram() {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex items-center justify-between min-w-[560px] px-4">
        {pipelineSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center">
              {/* Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="flex flex-col items-center gap-2"
              >
                <div className={`w-14 h-14 rounded-2xl ${step.dot} ring-4 ${step.ring} flex items-center justify-center shadow-md`}>
                  <Icon size={22} className="text-white" />
                </div>
                <span className="text-xs font-semibold text-slate-500 text-center leading-tight w-16">
                  {step.label}
                </span>
              </motion.div>

              {/* Connector line with animated dot */}
              {i < pipelineSteps.length - 1 && (
                <div className="relative flex-1 mx-2 h-1 bg-slate-100 rounded-full overflow-visible">
                  <motion.div
                    className={`absolute top-0 left-0 h-full ${step.dot} rounded-full`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                  />
                  {/* Travelling dot */}
                  <motion.div
                    className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 ${step.dot} rounded-full shadow-sm`}
                    initial={{ left: "0%", opacity: 0 }}
                    whileInView={{ left: ["0%", "90%"], opacity: [0, 1, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.12 + 0.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Inline module visuals ────────────────────────────────────────────────────
function FlowBars() {
  const bars = [
    { label: "Unit 1", pct: 26, color: "bg-sky-400" },
    { label: "Unit 2", pct: 21, color: "bg-violet-400" },
    { label: "Unit 3", pct: 28, color: "bg-indigo-400" },
    { label: "Unit 4", pct: 25, color: "bg-teal-400" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {bars.map((b, i) => (
        <div key={b.label} className="flex items-center gap-2">
          <span className="text-xs text-slate-400 w-12 shrink-0">{b.label}</span>
          <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
            <motion.div
              className={`h-full ${b.color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${b.pct * 3}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs font-bold text-slate-500 w-8 text-right">{b.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function BillingEngineAnim() {
  return (
    <motion.div
      className="mt-4 bg-slate-900 rounded-xl p-4 font-mono text-xs leading-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="text-slate-500">{"// proportional share"}</div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-slate-300"
      >
        <span className="text-sky-400">flow</span>{" = 4,789 / 18,420"}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="text-slate-300"
      >
        <span className="text-violet-400">share</span>{" = "}
        <span className="text-emerald-400">26.0%</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0 }}
        className="text-slate-300"
      >
        <span className="text-amber-400">bill</span>{" = 0.26 × $284 = "}
        <span className="text-white font-bold">$73.84</span>
      </motion.div>
    </motion.div>
  );
}

function BillPreview() {
  return (
    <motion.div
      className="mt-4 rounded-xl overflow-hidden border border-emerald-100 shadow-sm"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25 }}
    >
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 flex justify-between">
        <span className="text-white text-xs font-bold">Water Bill · Unit 3</span>
        <span className="text-white text-sm font-black">$73.84</span>
      </div>
      <div className="bg-white px-4 py-3 space-y-1.5">
        {[["Usage", "4,789 gal"], ["Share", "26%"], ["Due", "Apr 15"]].map(([l, v]) => (
          <div key={l} className="flex justify-between text-xs">
            <span className="text-slate-400">{l}</span>
            <span className="font-semibold text-slate-700">{v}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function EmailStatuses() {
  const rows = [
    { unit: "Unit 1 – Johnson",  status: "Opened",    color: "text-sky-600 bg-sky-50" },
    { unit: "Unit 2 – Martinez", status: "Delivered", color: "text-emerald-600 bg-emerald-50" },
    { unit: "Unit 3 – Williams", status: "Opened",    color: "text-sky-600 bg-sky-50" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {rows.map((r, i) => (
        <motion.div
          key={r.unit}
          className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.12 }}
        >
          <div className="flex items-center gap-2">
            <Mail size={12} className="text-amber-500" />
            <span className="text-xs text-slate-600">{r.unit}</span>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.color}`}>
            {r.status}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function PaymentCard() {
  return (
    <div className="mt-4 space-y-2">
      <motion.div
        className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-4 text-white"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs opacity-70">Payment received</div>
            <div className="font-bold text-sm mt-0.5">Unit 3 – Williams</div>
            <div className="text-xs opacity-60 mt-1">Visa ···· 4242 · Apr 10</div>
          </div>
          <div className="text-right">
            <div className="text-xl font-black">$73.84</div>
            <div className="flex items-center gap-1 justify-end mt-1">
              <CheckCheck size={12} className="opacity-80" />
              <span className="text-xs opacity-80">Confirmed</span>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-between px-1">
        <span className="text-xs text-slate-400">Collection rate this month</span>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-emerald-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "97%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <span className="text-xs font-bold text-emerald-600">97%</span>
        </div>
      </div>
    </div>
  );
}

function AdminTable() {
  const rows = [
    { unit: "Unit 1", amount: "$62.48", status: "Paid",    color: "text-emerald-600 bg-emerald-50" },
    { unit: "Unit 2", amount: "$51.12", status: "Paid",    color: "text-emerald-600 bg-emerald-50" },
    { unit: "Unit 3", amount: "$73.84", status: "Overdue", color: "text-red-600 bg-red-50" },
    { unit: "Unit 4", amount: "$70.94", status: "Pending", color: "text-amber-600 bg-amber-50" },
  ];
  return (
    <div className="mt-4 space-y-1.5">
      {rows.map((r, i) => (
        <motion.div
          key={r.unit}
          className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 + i * 0.1 }}
        >
          <span className="text-xs text-slate-500 w-12">{r.unit}</span>
          <span className="text-xs font-semibold text-slate-700 flex-1">{r.amount}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.color}`}>
            {r.status}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ── Module data ───────────────────────────────────────────────────────────────
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
    Visual: FlowBars,
  },
  {
    id: "B",
    icon: Calculator,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    title: "Mathematical Billing Engine",
    points: [
      "Import the total community bill (manual or via API)",
      "System calculates cost per gallon automatically",
      "Each household receives their exact proportional share",
    ],
    Visual: BillingEngineAnim,
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
    Visual: BillPreview,
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
    Visual: EmailStatuses,
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
    Visual: PaymentCard,
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
    Visual: AdminTable,
  },
];

// ── Sample bill with usage chart ──────────────────────────────────────────────
const monthlyHistory = [
  { month: "Nov", amount: 68 },
  { month: "Dec", amount: 72 },
  { month: "Jan", amount: 79 },
  { month: "Feb", amount: 71 },
  { month: "Mar", amount: 76 },
  { month: "Apr", amount: 73.84, current: true },
];

const unitBreakdown = [
  { unit: "Unit 1 – Johnson",  gal: 4601, amount: 62.48,  pct: 25, color: "bg-sky-400" },
  { unit: "Unit 2 – Martinez", gal: 3820, amount: 51.12,  pct: 21, color: "bg-violet-400" },
  { unit: "Unit 3 – Williams", gal: 4789, amount: 73.84,  pct: 26, color: "bg-indigo-400", highlight: true },
  { unit: "Unit 4 – Chen",     gal: 5210, amount: 96.56,  pct: 28, color: "bg-teal-400" },
];

export default function BillingSoftware() {
  return (
    <section id="software" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
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
          className="text-center text-xl text-slate-500 max-w-2xl mx-auto mb-12"
        >
          Etrenzik solves one of the hardest problems in shared water systems:
          how do you fairly split a single master water bill across multiple
          homes or tenants?
        </motion.p>

        {/* ── Animated Pipeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-14 bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl border border-slate-100 p-8"
        >
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            How your data flows through the platform
          </p>
          <PipelineDiagram />
        </motion.div>

        {/* ── Formula callout ── */}
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

        {/* ── Module cards with inline visuals ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s, i) => {
            const Icon = s.icon;
            const Visual = s.Visual;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`bg-white rounded-2xl border ${s.border} p-7 shadow-sm card-hover`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center`}>
                    <Icon size={20} className={s.color} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${s.color}`}>
                    Module {s.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{s.title}</h3>

                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-sky-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-sm">{p}</span>
                    </li>
                  ))}
                </ul>

                {/* Inline animated graphic */}
                <Visual />
              </motion.div>
            );
          })}
        </div>

        {/* ── Enhanced Sample Bill ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl border border-slate-100 p-8 lg:p-14"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-semibold tracking-wide uppercase mb-3">
              Sample Bill
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">
              Every household, one clear statement
            </h3>
            <p className="text-slate-500 mt-2">
              Automatically generated each billing cycle — no manual math required.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">

            {/* Left — actual bill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
            >
              {/* Bill header */}
              <div className="bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs opacity-75 uppercase tracking-wide">Etrenzik Water Bill</div>
                    <div className="text-lg font-bold mt-1">Maple Grove HOA — Unit 3</div>
                    <div className="text-xs opacity-70 mt-0.5">Billing period: March 2026</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black">$73.84</div>
                    <div className="text-xs opacity-75 mt-0.5">Due Apr 15, 2026</div>
                  </div>
                </div>
              </div>

              {/* Usage breakdown */}
              <div className="px-6 pt-5 pb-3">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Usage breakdown
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Total community usage", value: "18,420 gal", sub: true },
                    { label: "Your unit usage", value: "4,789 gal", sub: true },
                    { label: "Your share of community", value: "26.0%", sub: true },
                  ].map((r) => (
                    <div key={r.label} className={`flex justify-between text-sm pb-2 ${r.sub ? "border-b border-slate-50" : ""}`}>
                      <span className="text-slate-500">{r.label}</span>
                      <span className="font-semibold text-slate-700">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost breakdown */}
              <div className="px-6 pb-3">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 mt-2">
                  Cost breakdown
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Community master bill", value: "$284.00" },
                    { label: "Cost per gallon", value: "$0.0154 / gal" },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between text-sm border-b border-slate-50 pb-2.5">
                      <span className="text-slate-500">{r.label}</span>
                      <span className="font-semibold text-slate-700">{r.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm pt-1">
                    <span className="font-bold text-slate-800">Amount due</span>
                    <span className="font-black text-sky-600 text-base">$73.84</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 mt-2 flex gap-3">
                <button className="flex-1 px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-xl transition-colors">
                  Pay Now
                </button>
                <button className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                  View History
                </button>
              </div>
            </motion.div>

            {/* Right — charts */}
            <div className="space-y-6">

              {/* Community usage bar chart */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-bold text-slate-800">Community Usage Split</div>
                    <div className="text-xs text-slate-400 mt-0.5">Total: 18,420 gal this month</div>
                  </div>
                  <TrendingUp size={16} className="text-sky-500" />
                </div>
                <div className="space-y-3">
                  {unitBreakdown.map((u, i) => (
                    <div key={u.unit}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className={`font-medium ${u.highlight ? "text-sky-700" : "text-slate-500"}`}>
                          {u.unit} {u.highlight && <span className="ml-1 px-1.5 py-0.5 bg-sky-100 text-sky-600 rounded text-xs">You</span>}
                        </span>
                        <span className="font-bold text-slate-700">${u.amount.toFixed(2)}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full ${u.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${u.pct * 3.2}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                        />
                      </div>
                      <div className="text-right text-xs text-slate-400 mt-0.5">{u.gal.toLocaleString()} gal · {u.pct}%</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Monthly history sparkline */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-bold text-slate-800">Your Bill History</div>
                    <div className="text-xs text-slate-400 mt-0.5">Unit 3 — last 6 months</div>
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                    −3% vs avg
                  </span>
                </div>
                <div className="flex items-end gap-2 h-16">
                  {monthlyHistory.map((m, i) => {
                    const maxAmt = Math.max(...monthlyHistory.map((x) => x.amount));
                    const pct = (m.amount / maxAmt) * 100;
                    return (
                      <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex items-end" style={{ height: 48 }}>
                          <motion.div
                            className={`w-full rounded-t-md ${m.current ? "bg-sky-500" : "bg-slate-200"}`}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                          />
                        </div>
                        <span className={`text-xs ${m.current ? "font-bold text-sky-600" : "text-slate-400"}`}>
                          {m.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-3 border-t border-slate-50 pt-3">
                  <span>6-mo avg: <strong className="text-slate-600">$73.14</strong></span>
                  <span>This month: <strong className="text-sky-600">$73.84</strong></span>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
