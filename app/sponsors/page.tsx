import Image from "next/image";
import { eliteSponsors, otherSponsors, superSponsors } from "@/data/locations";

function SponsorTier({
  title,
  subtitle,
  sponsors,
  columns,
}: {
  title: string;
  subtitle: string;
  sponsors: typeof eliteSponsors | typeof superSponsors | typeof otherSponsors;
  columns: string;
}) {
  return (
    <section className="card overflow-hidden">
      <div className="flex items-end justify-between gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>
        <span className="badge">{sponsors.length} sponsors</span>
      </div>

      <div className={`grid gap-3 p-5 ${columns}`}>
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="flex items-center gap-4 rounded-[24px] border border-slate-200 bg-white p-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-slate-50">
              <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain p-1.5" />
            </div>
            <div>
              <p className="font-extrabold">{sponsor.name}</p>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{sponsor.tier}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SponsorsPage() {
  return (
    <main className="container-wrap py-8">
      <div className="card overflow-hidden bg-[linear-gradient(135deg,#08131a_0%,#0d2531_100%)] text-white shadow-[0_18px_60px_rgba(2,8,23,0.28)]">
        <div className="grid gap-5 p-5 md:p-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="badge border-white/10 bg-white/10 text-white/70">Sponsor presentation page</span>
            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Support Jordan’s national tourism platform
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75">
              This page is built for funding conversations with banks, airlines, telecom companies, and major
              brands that want strong visibility and long-term association with Jordan’s tourism identity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="cta cta-primary">Elite Sponsors</span>
              <span className="cta cta-soft">Super Sponsors</span>
              <span className="cta cta-soft">All Sponsor Tiers</span>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[24px] border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/60">Why sponsors benefit</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Strong brand visibility, national relevance, and a premium association with Jordan’s tourism story.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/8 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/60">Best placement strategy</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Elite sponsors appear in the full-width autoplay strip directly under the navbar on the home page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5">
        <SponsorTier
          title="Elite Sponsors"
          subtitle="Highest visibility and strongest positioning"
          sponsors={eliteSponsors}
          columns="md:grid-cols-2"
        />
        <SponsorTier
          title="Super Sponsors"
          subtitle="Premium supporting partners with strong exposure"
          sponsors={superSponsors}
          columns="md:grid-cols-3"
        />
        <SponsorTier
          title="Other Sponsors"
          subtitle="Additional supporters shown on the sponsor page"
          sponsors={otherSponsors}
          columns="md:grid-cols-3"
        />
      </div>
    </main>
  );
}
