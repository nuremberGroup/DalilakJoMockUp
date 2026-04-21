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
    <section className="border-y border-white/10 bg-slate-950 text-white">
      <div className="container-wrap py-3">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/55">
              Elite Sponsors
            </p>
            <p className="text-sm text-white/70"></p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-bold tracking-[0.2em] text-white/60">
            Level One
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
          <div
            className="flex w-max items-center gap-4 px-4 py-3"
            style={{
              animation: `sponsorMarquee ${Math.max(18, sponsors.length * 6)}s linear infinite`,
            }}
          >
            {repeated.map((sponsor, idx) => (
              <div
                key={`${sponsor.name}-${idx}`}
                className="flex min-w-[220px] items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white/95">
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
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
