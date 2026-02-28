const placeholders = [
  {
    title: "BingeFlix",
    description: "Streaming platform guide with AI-powered recommendations, Google OAuth, and real-time availability across platforms.",
    tags: ["React", "Node.js", "MongoDB", "OpenAI"],
  },
  {
    title: "FPGA Musical Note Tuner",
    description: "Real-time audio frequency detection on Icebreaker FPGA with correlation-based analysis and 99.2% accuracy.",
    tags: ["SystemVerilog", "FPGA", "Cocotb"],
  },
  {
    title: "Bouncing Barrier Ball",
    description: "VGA-based arcade game on Basys3 FPGA with collision detection, physics simulation, and 60 FPS rendering.",
    tags: ["Verilog", "FPGA", "VGA"],
  },
  {
    title: "Wort Monster",
    description: "Interactive German compound word learning app with TTS, authentication, and progress tracking.",
    tags: ["React", "Tailwind", "Supabase", "Firebase"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-tron-cyan glow-text mb-10 tracking-wide">
          Portfolio
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {placeholders.map((project) => (
            <div
              key={project.title}
              className="border border-tron-border rounded-lg p-6 bg-tron-card/50 glow-border-hover card-hover flex flex-col"
            >
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-tron-text-dim leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded border border-tron-cyan/30 text-tron-cyan-dim bg-tron-cyan/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-tron-text-dim italic">
                Details coming soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
