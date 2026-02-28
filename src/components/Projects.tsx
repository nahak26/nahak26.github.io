import { projects } from "../data/resume";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-tron-cyan glow-text mb-10 tracking-wide">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((group) => (
            <div
              key={group.title}
              className="border border-tron-border rounded-lg p-6 bg-tron-card/50 glow-border-hover card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.tech.split(", ").map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded border border-tron-cyan/30 text-tron-cyan-dim bg-tron-cyan/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2">
                {group.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-tron-text leading-relaxed flex gap-2">
                    <span className="text-tron-cyan mt-1 shrink-0">&#9656;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
