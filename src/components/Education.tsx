import { education } from "../data/resume";

export function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-tron-cyan glow-text mb-10 tracking-wide">
          Education
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="border border-tron-border rounded-lg p-6 bg-tron-card/50 glow-border-hover card-hover"
            >
              <h3 className="font-heading text-lg font-semibold text-white mb-1">
                {edu.school}
              </h3>
              <p className="text-tron-cyan-dim text-sm mb-2">{edu.degree}</p>
              <p className="text-tron-text-dim text-sm">
                {edu.location} &middot; {edu.dates}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
