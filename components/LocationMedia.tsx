import type { LocationItem } from "@/data/locations";

interface LocationMediaProps {
  item: LocationItem;
}

export default function LocationMedia({ item }: LocationMediaProps) {
  return (
    <div className="space-y-5">
      <div className="card overflow-hidden">
        <div className="relative aspect-video">
         <iframe
  src={`${item.videoEmbed}?autoplay=0&mute=1&controls=1&rel=0&playsinline=1`}
  title={`${item.name} video`}
  allow="encrypted-media; picture-in-picture"
  referrerPolicy="strict-origin-when-cross-origin"
  className="h-full w-full"
/>
        </div>
        <div className="card-body">
          <span className="badge">Video preview</span>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Cinematic video presentation for {item.name}.
          </p>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="relative aspect-video">
          <iframe
            src={`${item.reelEmbed}?autoplay=0&mute=1&controls=1&rel=0&playsinline=1`}
            title={`${item.name} reel`}
            allow="encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full"
          />
        </div>
        <div className="card-body">
          <span className="badge">Reel preview</span>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Short reel-style preview for quick social-style browsing.
          </p>
        </div>
      </div>
    </div>
  );
}
