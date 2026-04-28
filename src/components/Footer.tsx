import Link from "next/link";
import { Droplets } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Smart Meter", href: "#features" },
    { label: "Leak Detection", href: "#features" },
    { label: "Irrigation Monitor", href: "#features" },
    { label: "Multi-Property", href: "#features" },
  ],
  Software: [
    { label: "Community Billing", href: "#software" },
    { label: "Payment Portal", href: "#software" },
    { label: "Admin Dashboard", href: "#software" },
    { label: "API Access", href: "#software" },
  ],
  Support: [
    { label: "Documentation", href: "#" },
    { label: "Setup Guide", href: "#" },
    { label: "Contact Us", href: "mailto:support@etrenzik.com" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <Droplets size={17} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">Etrenzik</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Exceptionally smart water management for every property — from
              flow to financial clarity.
            </p>
            <div className="flex gap-3 mt-6">
              {["Twitter", "LinkedIn", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                {group}
              </div>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>© {new Date().getFullYear()} Etrenzik. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
