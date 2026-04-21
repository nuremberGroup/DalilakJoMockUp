import { locations } from "@/data/locations";
import SearchAndFilter from "@/components/SearchAndFilter";

export default function ExplorePage() {
  return (
    <main className="container-wrap py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="section-title">Explore locations</h1>
          <p className="section-subtitle">Search the destination list and browse the content cards.</p>
        </div>
        <span className="badge hidden md:block">{locations.length} destinations</span>
      </div>

      <div className="mt-6">
        <SearchAndFilter locations={locations} />
      </div>
    </main>
  );
}
