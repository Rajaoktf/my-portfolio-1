export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} Raja Oktafrianto
        </span>
        <span className="font-mono text-xs text-text-dim">
          Built with React + TypeScript + Tailwind
        </span>
      </div>
    </footer>
  );
}
