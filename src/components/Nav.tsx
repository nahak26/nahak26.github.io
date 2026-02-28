import { useState } from "react";
import { personal } from "../data/resume";

const sections = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-tron-bg/90 backdrop-blur-md border-b border-tron-border glow-line">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a
          href="#"
          className="font-heading text-lg font-bold text-tron-cyan tracking-wider hover:opacity-80 transition-opacity"
        >
          {personal.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="text-sm text-tron-text-dim hover:text-tron-cyan transition-colors font-medium"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-tron-cyan transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-tron-cyan transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-tron-cyan transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden border-t border-tron-border bg-tron-bg/95 px-6 pb-4">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-tron-text-dim hover:text-tron-cyan transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
