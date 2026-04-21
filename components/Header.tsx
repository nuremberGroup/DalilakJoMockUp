"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/map", label: "Map View" },
  { href: "/about", label: "About" },
  { href: "/sponsors", label: "Our Sponsors" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/85 backdrop-blur-xl">
      <div className="container-wrap flex min-h-[76px] items-center justify-between gap-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 font-extrabold tracking-tight">
          <span className="h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,rgba(0,186,227,1),rgba(197,0,24,1))] shadow-glow" />
          <span>
            DalilakJo
            <span className="block text-xs font-semibold tracking-normal text-slate-500">
              Jordan...More than You Expect
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-cyan-100 text-slate-950"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-slate-100"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-800 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-2 bg-white/95 backdrop-blur-xl border-t">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={[
                  "rounded-xl px-4 py-3 text-sm font-semibold transition",
                  active
                    ? "bg-cyan-100 text-slate-950"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}