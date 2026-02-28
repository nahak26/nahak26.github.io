import { skills } from "../data/resume";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-tron-cyan glow-text mb-10 tracking-wide">
          Technical Skills
        </h2>
        <div className="space-y-6">
          {skills.map((cat) => (
            <div key={cat.label}>
              <h3 className="font-heading text-sm font-semibold text-tron-cyan-dim tracking-wider uppercase mb-3">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full border border-tron-cyan/25 text-tron-text bg-tron-card/60 hover:border-tron-cyan/50 hover:text-tron-cyan transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
