"use client";

import Link from "next/link";
import { useState } from "react";
import { locations } from "@/data/locations";

const pinPositions = [
  { left: "42%", top: "68%" }, { left: "52%", top: "22%" }, 
  { left: "58%", top: "28%" }, { left: "38%", top: "45%" }, 
  { left: "48%", top: "82%" }, { left: "35%", top: "92%" }, 
] as const;

export default function ArchitecturalMapPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeLocation = locations[activeIndex];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-black pb-32">
      
      {/* ── MINIMALIST OVERLAY HEADER ── */}
      <div className="p-8 md:p-12 flex justify-between items-start">
        <div>
          <p className="text-[#00bae3] font-bold text-xs uppercase tracking-[0.4em] mb-4">Jordanian Heritage</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-6">
            THE <br/> ATLAS.
          </h1>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Site Coordinates</p>
          <p className="text-sm font-mono mt-1">31.2644° N, 36.4782° E</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-0 border-y border-slate-100">
        
        {/* ── LEFT: INTERACTIVE MAP (7 COLUMNS) ── */}
        <div className="lg:col-span-7 relative bg-white lg:border-r border-slate-100 min-h-[500px] lg:min-h-[800px] flex items-center justify-center p-12">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 left-0 p-8">
             <div className="w-12 h-0.5 bg-[#00bae3]" />
          </div>

          <svg viewBox="0 0 800 1000" className="w-full h-full max-w-xl opacity-80">
            <path
              d="M420 50 L550 80 L750 150 L780 400 L650 550 L620 850 L400 950 L350 980 L320 950 L330 850 L300 700 L280 550 L250 400 L280 200 L320 100 Z"
              fill="#F8F8F8"
              stroke="#000"
              strokeWidth="0.5"
            />
          </svg>

          {/* Interactive Pins */}
          {locations.map((location, index) => (
            <button
              key={location.slug}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group"
              style={pinPositions[index]}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex flex-col items-center">
                {/* Minimalist Pin */}
                <div className={`transition-all duration-500 border border-white ${
                  activeIndex === index 
                  ? 'w-6 h-6 bg-[#c50018] rounded-none rotate-45 shadow-xl shadow-[#c50018]/20' 
                  : 'w-3 h-3 bg-black hover:bg-[#00bae3] rounded-full'
                }`} />
                
                {/* Floating Name (Only for active) */}
                <span className={`absolute -top-8 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {location.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ── RIGHT: EDITORIAL CONTENT (5 COLUMNS) ── */}
        <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-16 bg-[#FAFAFA]">
          
          <div className="space-y-12">
            <div>
              <span className="text-[60px] font-black text-slate-100 leading-none">0{activeIndex + 1}</span>
              <h2 className="text-4xl font-bold tracking-tight text-black mt-[-20px]">{activeLocation.name}</h2>
              <p className="text-[#00bae3] font-bold text-xs uppercase tracking-widest mt-2">{activeLocation.city} — {activeLocation.category}</p>
            </div>

            {/* Added Detail: Heritage Info */}
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Heritage Significance</p>
                <p className="text-sm leading-relaxed text-slate-600">Considered a primary example of {activeLocation.category.toLowerCase()} preservation in the Levant.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Accessibility</p>
                <p className="text-sm leading-relaxed text-slate-600">Open Daily<br/>8:00 AM — 5:00 PM</p>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed font-light">
              This site represents the architectural pinnacle of its era, blending local materials with global design influences.
            </p>

            <Link 
              href={`/locations/${activeLocation.slug}`}
              className="group inline-flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                →
              </div>
              <span className="font-bold text-sm uppercase tracking-widest">Discover More</span>
            </Link>
          </div>

          {/* ── MINI LIST NAVIGATION ── */}
          <div className="mt-20">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-6">Directory</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {locations.map((loc, idx) => (
                <button
                  key={loc.slug}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-xs font-bold uppercase tracking-widest transition-all ${
                    activeIndex === idx ? 'text-[#c50018] border-b border-[#c50018]' : 'text-slate-400 hover:text-black'
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTION: EXTRA DETAILS ── */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 mt-24">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#00bae3]">Visual Preservation</h4>
            <p className="text-sm text-slate-500 leading-relaxed">We utilize high-resolution digital mapping to ensure the cultural integrity of Jordan’s heritage sites for future generations.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-black">Visit Statistics</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black">2.4M</span>
              <span className="text-xs text-slate-400 font-medium">Annual Visitors</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#c50018]">Global Recognition</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Many sites on this atlas are protected under UNESCO World Heritage status due to their universal value.</p>
          </div>
        </div>
      </div>
    </main>
  );
}