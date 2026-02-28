import { personal } from "../data/resume";

export function Footer() {
  return (
    <footer className="border-t border-tron-border py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-tron-text-dim">
        <p>&copy; {new Date().getFullYear()} {personal.name}</p>
        <div className="flex gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tron-cyan transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tron-cyan transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-tron-cyan transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
