import Image from "next/image";
import Link from "next/link";
import { eliteSponsors, locations, superSponsors } from "@/data/locations";
import LocationCard from "@/components/LocationCard";
import SponsorStrip from "@/components/SponsorStrip";

export default function HomePage() {
  const featured = locations.slice(0, 3);
  const reels = locations.slice(0, 3);
  const heroImages = locations.slice(0, 4);

  return (
    <main>
      <SponsorStrip sponsors={eliteSponsors} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(0,186,227,.18),transparent_18%),radial-gradient(circle_at_90%_10%,rgba(197,0,24,.12),transparent_20%),linear-gradient(180deg,#08131a_0%,#0b1f29_100%)]" />
        <div className="container-wrap py-6 md:py-10">
          <div className="card overflow-hidden border-white/10 bg-slate-950 text-white shadow-[0_18px_60px_rgba(2,8,23,0.35)]">
            <div className="grid gap-6 p-5 md:grid-cols-[1.1fr_.9fr] md:p-8">
              <div>
                <span className="badge border-white/10 bg-white/10 text-white/70">
                  Official tourism showcase 
                </span>
                <h1 className="mt-4 text-5xl font-black leading-[0.92] tracking-tight md:text-7xl">
                  DalilakJo
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                  Jordan...More than You Expect. A vibrant tourism platform that combines premium visuals,
                  short-form reels, and curated destination content to create a national experience that feels alive.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/explore" className="cta cta-primary">
                    Explore Locations
                  </Link>
                  <Link href="/sponsors" className="cta cta-soft">
                    Sponsor Opportunities
                  </Link>
                  <Link href="/map" className="cta cta-soft">
                    Open Map
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[22px] border border-white/10 bg-white/6 p-4">
                    <p className="text-2xl font-black">6</p>
                    <p className="mt-1 text-sm text-white/65">curated destinations</p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/6 p-4">
                    <p className="text-2xl font-black">3</p>
                    <p className="mt-1 text-sm text-white/65">sponsor tiers</p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/6 p-4">
                    <p className="text-2xl font-black">1</p>
                    <p className="mt-1 text-sm text-white/65">national identity</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  {heroImages.slice(0, 2).map((item) => (
                    <div key={item.slug} className="relative overflow-hidden rounded-[24px] border border-white/10 aspect-[4/5]">
                      <Image src={item.coverImage} alt={item.name} fill className="object-cover" priority />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {heroImages.slice(2, 4).map((item) => (
                    <div key={item.slug} className="relative overflow-hidden rounded-[24px] border border-white/10 aspect-[4/5]">
                      <Image src={item.coverImage} alt={item.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wrap py-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass rounded-[28px] p-5">
            <span className="badge">Brand essence</span>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Confidence</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              A trusted digital gateway that transforms inspiration into informed travel discovery.
            </p>
          </div>
          <div className="glass rounded-[28px] p-5">
            <span className="badge">Style direction</span>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Minimal, lively, premium</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Inspired by modern tourism portals with richer motion, color, and visual energy.
            </p>
          </div>
          <div className="glass rounded-[28px] p-5">
            <span className="badge">Sponsor focus</span>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Immediate visibility</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Elite sponsors appear in a full-width autoplay strip directly under the navbar.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wrap py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Jordan in motion</h2>
            <p className="section-subtitle">
              Real images and reel-style previews make the platform feel energetic and visually rich.
            </p>
          </div>
         
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-3">
          {reels.map((item) => (
            <div key={item.slug} className="card">
              <div className="relative aspect-video">
                <iframe
                  src={item.reelEmbed}
                  title={`${item.name} reel`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  className="h-full w-full"
                />
              </div>
              <div className="card-body">
                <h3 className="text-2xl font-extrabold tracking-tight">{item.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wrap py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Featured destinations</h2>
            <p className="section-subtitle">
              A more vivid layout with real imagery and clean tourism storytelling.
            </p>
          </div>
          <Link href="/explore" className="cta cta-primary text-xs md:text-base">
            Explore
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((item) => (
            <LocationCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="container-wrap py-8">
        <div className="rounded-[30px] border border-slate-200 bg-white/85 p-5 shadow-[0_12px_40px_rgba(2,8,23,0.08)]">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="badge">Level Two</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight"> Super sponsors </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                The home page stays focused on the most valuable partners, while the sponsor page can explain the full
                package and show all sponsor tiers.
              </p>
            </div>
            <Link href="/sponsors" className="cta cta-dark">
              Open sponsor page
            </Link>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {superSponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex items-center gap-4 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white">
                  <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain p-1" />
                </div>
                <div>
                  <p className="font-bold">{sponsor.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{sponsor.tier}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
