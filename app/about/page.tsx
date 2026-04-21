export default function AboutPage() {
  return (
    <main className="container-wrap py-8">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <div className="card card-body">
          <span className="badge">About DalilakJo</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight">Jordan...More than You Expect</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            DalilakJo is a progressive digital tourism platform for travelers who seek meaningful experiences
            and new discoveries. It empowers users to explore Jordan with confidence, transforming inspiration
            into personalized journeys through smart technology and immersive content.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            The brand is designed to feel energetic, contemporary, respectful, progressive, open, and successful.
          </p>
        </div>

        <div className="card card-body">
          <span className="badge">Brand spirit</span>
          <div className="mt-4 grid gap-3">
            {[
              ["Energetic", "Fluid forms, dynamic movement"],
              ["Contemporary", "Fresh and current"],
              ["Respectful", "Honest imagery and detail"],
              ["Progressive", "Purposeful and aspirational"],
              ["Open", "Friendly and transparent"],
              ["Successful", "Leading and iconic"],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                <p className="font-bold">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
