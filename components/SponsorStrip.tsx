"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { SponsorItem } from "@/data/locations";

interface SponsorStripProps {
  sponsors: SponsorItem[];
}

export default function SponsorStrip({ sponsors }: SponsorStripProps) {
  const repeated = useMemo(() => [...sponsors, ...sponsors], [sponsors]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sponsors.length === 0) return;
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % sponsors.length);
    }, 2400);
    return () => window.clearInterval(interval);
  }, [sponsors.length]);

  if (sponsors.length === 0) return null;

  return (
    <section className="relative overflow-hidden  text-white">
  {/* EXACT MATCH BACKGROUND: Base color and gradients pulled directly from the Hero */}
 <div className="absolute inset-0 -z-10 bg-[#9a2525] " />
  
  {/* Subtle gradient overlay to add dimension without turning it into Maroon */}
  <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,transparent_100%)]" />
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(197,0,24,0.4),transparent_50%)]" />
  <div className="container-wrap py-3">
    <div className="mb-2 flex items-center justify-between gap-3">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/80">
          Elite Sponsors
        </p>
      </div>
      <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-white/90">
        Level One
      </div>
    </div>

    {/* Updated to slightly darker backdrop so the white logos pop against the red */}
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/10 backdrop-blur-sm shadow-inner">
      <div
        className="flex w-max items-center gap-4 px-4 py-3"
        style={{
          animation: `sponsorMarquee ${Math.max(18, sponsors.length * 6)}s linear infinite`,
        }}
      >
        {repeated.map((sponsor, idx) => (
          <div
            key={`${sponsor.name}-${idx}`}
            className="flex min-w-[220px] items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-sm transition-colors hover:bg-white/20"
          >
            {/* Logo container kept white to preserve sponsor brand colors */}
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white p-1">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                fill
                sizes="48px"
                className="object-contain p-1"
                priority={idx < sponsors.length}
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{sponsor.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {sponsor.tier}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <style jsx global>{`
      @keyframes sponsorMarquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `}</style>
  </div>
</section>
  );
}
