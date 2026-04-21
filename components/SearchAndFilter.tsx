"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LocationCategory, LocationItem } from "@/data/locations";

interface SearchAndFilterProps {
  locations: LocationItem[];
}

export default function SearchAndFilter({ locations }: SearchAndFilterProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<LocationCategory | "All">("All");

  const categories = useMemo(() => {
    const set = new Set<LocationCategory>();
    locations.forEach((loc) => set.add(loc.category));
    return ["All", ...Array.from(set)] as const;
  }, [locations]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return locations.filter((location) => {
      const matchCategory = active === "All" || location.category === active;
      const matchQuery =
        q.length === 0 ||
        [location.name, location.city, location.category, location.description].join(" ").toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [active, locations, query]);

  return (
    <div className="space-y-5">
      <div className="glass rounded-[24px] p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search destinations, cities, or categories"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 placeholder:text-slate-400"
          />
          <span className="pill shrink-0">{filtered.length} results</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={[
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                isActive
                  ? "border-cyan-200 bg-cyan-100 text-slate-950"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <Link key={item.slug} href={`/locations/${item.slug}`} className="card group">
            <div className="relative aspect-[4/5]">
              <img
                src={item.coverImage}
                alt={item.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/0 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700">
                {item.city}
              </div>
            </div>
            <div className="card-body">
              <h3 className="text-2xl font-extrabold tracking-tight">{item.name}</h3>
              <p className="mt-1 text-sm font-semibold text-slate-500">{item.category}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
