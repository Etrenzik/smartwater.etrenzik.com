"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sandra K.",
    title: "Homeowner, Phoenix AZ",
    avatar: "SK",
    color: "bg-sky-500",
    stars: 5,
    quote:
      "I had no idea how much water my irrigation was using until Etrenzik flagged it. Within a week I cut my bill by almost $40 a month. The setup took maybe 8 minutes.",
  },
  {
    name: "Marcus T.",
    title: "Property Manager, Sunset HOA — 48 Units",
    avatar: "MT",
    color: "bg-indigo-500",
    stars: 5,
    quote:
      "Managing a shared water system used to mean spreadsheets, arguments, and endless manual calculations. Etrenzik automated the whole billing process. Every resident gets their own bill, paid online. Disputes dropped to zero.",
  },
  {
    name: "Rachel O.",
    title: "Owner, Greenfield Mobile Park",
    avatar: "RO",
    color: "bg-emerald-500",
    stars: 5,
    quote:
      "We have 62 units on one master meter. Before Etrenzik, I was guessing. Now I have exact usage per lot, automatic invoices, and online payments. It paid for itself in two months.",
  },
  {
    name: "James L.",
    title: "Small Business Owner, Tucson AZ",
    avatar: "JL",
    color: "bg-violet-500",
    stars: 5,
    quote:
      "The leak alert saved me from what could have been a catastrophic repair. Etrenzik detected the anomaly at 2 AM and sent me a text. The plumber confirmed a slow leak the next morning.",
  },
  {
    name: "Priya M.",
    title: "Director of Operations, Multi-Family Portfolio",
    avatar: "PM",
    color: "bg-pink-500",
    stars: 5,
    quote:
      "Across our 6 properties, Etrenzik gives us one unified view of water costs. The reporting is beautiful, the billing is automatic, and our tenants actually appreciate the transparency.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-slate-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Customer Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by property owners{" "}
            <span className="gradient-text">everywhere.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-7 card-hover flex flex-col ${
                i === 1 ? "lg:col-span-1 md:col-span-2 lg:md:col-span-1" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-50">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
