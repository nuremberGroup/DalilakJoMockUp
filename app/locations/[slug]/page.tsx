import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import LocationMedia from "@/components/LocationMedia";

interface LocationPageProps {
  params: { slug: string };
}

export default function LocationPage({ params }: LocationPageProps) {
  const item = locations.find((location) => location.slug === params.slug);

  if (item === undefined) {
    return notFound();
  }

  return (
    <main className="container-wrap py-8">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <div className="card overflow-hidden">
          <div className="relative aspect-[16/11]">
            <Image src={item.coverImage} alt={item.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/0 to-transparent" />
            <div className="absolute left-5 top-5">
              <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700">
                {item.category}
              </span>
            </div>
          </div>
          <div className="card-body">
            <h1 className="text-4xl font-black tracking-tight">{item.name}</h1>
            <p className="mt-2 text-sm font-semibold text-slate-500">{item.city} · {item.location}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        </div>

        <LocationMedia item={item} />
      </div>

      <div className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title text-2xl md:text-3xl">Image gallery</h2>
            <p className="section-subtitle">A premium gallery layout that feels more alive and more visual.</p>
          </div>
          <Link href="/explore" className="cta cta-primary">
            Back 
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {item.gallery.map((src, index) => (
            <div key={src} className="card overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image src={src} alt={`${item.name} gallery image ${index + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
