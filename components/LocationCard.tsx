import Image from "next/image";
import Link from "next/link";
import type { LocationItem } from "@/data/locations";

interface LocationCardProps {
  item: LocationItem;
  featured?: boolean;
}

export default function LocationCard({ item, featured = false }: LocationCardProps) {
  return (
    <Link href={`/locations/${item.slug}`} className="card group block">
      <div className={featured ? "relative aspect-[4/5]" : "relative aspect-[16/11]"}>
        <Image
          src={item.coverImage}
          alt={item.name}
          fill
          sizes={featured ? "33vw" : "33vw"}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700">
            {item.category}
          </span>
        </div>
      </div>
      <div className="card-body">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-950">{item.name}</h3>
            <p className="mt-1 text-sm font-semibold text-slate-500">{item.city}</p>
          </div>
          <span className="rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white">Open</span>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
      </div>
    </Link>
  );
}
