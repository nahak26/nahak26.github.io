import { experience } from "../data/resume";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-tron-cyan glow-text mb-10 tracking-wide">
          Experience
        </h2>
        <div className="relative border-l border-tron-border ml-3">
          {experience.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-tron-cyan/80 border-2 border-tron-bg pulse-dot" />

              <div className="border border-tron-border rounded-lg p-6 bg-tron-card/50 glow-border-hover card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-tron-cyan-dim text-sm">{exp.role}</p>
                  </div>
                  <p className="text-tron-text-dim text-sm whitespace-nowrap">
                    {exp.location} &middot; {exp.dates}
                  </p>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-tron-text leading-relaxed flex gap-2">
                      <span className="text-tron-cyan mt-1 shrink-0">&#9656;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
