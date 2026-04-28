"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, RefreshCw } from "lucide-react";

export default function BillingCalculator() {
  const [totalBill, setTotalBill] = useState(284);
  const [numUnits, setNumUnits] = useState(4);
  const [totalGallons, setTotalGallons] = useState(18420);
  const [unitGallons, setUnitGallons] = useState([4789, 3820, 5210, 4601]);

  const costPerGallon = totalBill / totalGallons;
  const totalUsedByUnits = unitGallons
    .slice(0, numUnits)
    .reduce((a, b) => a + b, 0);

  const unitCosts = unitGallons.slice(0, numUnits).map((g) => ({
    gallons: g,
    share: totalGallons > 0 ? (g / totalGallons) * 100 : 0,
    cost: totalGallons > 0 ? (g / totalGallons) * totalBill : 0,
  }));

  const updateUnitGallons = (index: number, value: number) => {
    const updated = [...unitGallons];
    updated[index] = value;
    setUnitGallons(updated);
  };

  const reset = () => {
    setTotalBill(284);
    setNumUnits(4);
    setTotalGallons(18420);
    setUnitGallons([4789, 3820, 5210, 4601]);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-semibold tracking-wide uppercase mb-4">
            <Calculator size={13} />
            Interactive Calculator
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            See the math{" "}
            <span className="gradient-text">work in real time.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Enter your community's water bill, total usage, and per-unit
            consumption. Etrenzik handles the rest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden"
        >
          {/* Inputs */}
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-slate-900">Community Settings</h3>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                <RefreshCw size={12} />
                Reset
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Master Bill ($)
                </label>
                <input
                  type="number"
                  value={totalBill}
                  onChange={(e) => setTotalBill(Number(e.target.value))}
                  min={0}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Total Gallons
                </label>
                <input
                  type="number"
                  value={totalGallons}
                  onChange={(e) => setTotalGallons(Number(e.target.value))}
                  min={1}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Number of Units
                </label>
                <select
                  value={numUnits}
                  onChange={(e) => setNumUnits(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white text-sm"
                >
                  {[2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} Units
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Unit rows */}
          <div className="p-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Per-Unit Usage</h3>
              <div className="text-xs text-slate-400 font-mono">
                Cost/gal: ${costPerGallon.toFixed(4)}
              </div>
            </div>

            <div className="space-y-4">
              {unitCosts.map((u, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-semibold text-slate-700">
                      Unit {i + 1}
                    </div>
                    <input
                      type="number"
                      value={unitGallons[i]}
                      onChange={(e) =>
                        updateUnitGallons(i, Number(e.target.value))
                      }
                      min={0}
                      className="w-28 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                    />
                    <span className="text-xs text-slate-400">gal</span>
                    <div className="flex-1 bg-slate-100 rounded-full h-2">
                      <motion.div
                        className="bg-sky-500 h-2 rounded-full"
                        animate={{ width: `${Math.min(u.share * 2.5, 100)}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="text-right w-28">
                      <div className="text-sm font-bold text-slate-900">
                        ${u.cost.toFixed(2)}
                      </div>
                      <div className="text-xs text-slate-400">
                        {u.share.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 p-5 bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl border border-sky-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black text-sky-600">
                    ${totalBill.toFixed(0)}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Master Bill
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800">
                    {totalGallons.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Total Gallons
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-600">
                    $
                    {unitCosts
                      .reduce((s, u) => s + u.cost, 0)
                      .toFixed(2)}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Allocated
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-400">
              Formula:{" "}
              <span className="font-mono">
                Individual Cost = (Unit Gallons ÷ Total Gallons) × Total Bill
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
