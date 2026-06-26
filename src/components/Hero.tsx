import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const roles = ['Frontend Developer', 'UI Engineer', 'React Specialist', 'Web Craftsman'];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen flex-col items-start justify-center px-6 pt-20">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#e2ff00 1px, transparent 1px), linear-gradient(90deg, #e2ff00 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent opacity-5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <p className="mb-6 font-mono text-xs tracking-[0.3em] text-text-muted uppercase animate-fade-up">
          Hello.
        </p>

        <h1
          className="mb-4 text-6xl font-semibold leading-tight tracking-tight text-text md:text-8xl animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          I'm Raja
          <br />
          <span className="text-accent"></span>
        </h1>

        <div
          className="mb-10 flex items-center gap-3 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span className="font-mono text-xl text-text-muted md:text-2xl">
            {displayed}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

        <p
          className="mb-12 max-w-xl text-base leading-relaxed text-text-muted animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Gua bikin web yang cepat, aksesibel, dan enak dipake. Fokus di
          React ecosystem — dari design system sampai performance optimization.
        </p>

        <div
          className="flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-all hover:bg-accent-dim"
          >
            Lihat Projek
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-3 font-mono text-sm text-text-muted transition-all hover:border-accent hover:text-accent"
          >
            Hubungi Gua
          </a>
        </div>

        {/* Status indicator */}
        <div
          className="mt-16 flex items-center gap-2 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs text-text-muted">
            Available for freelance & full-time
          </span>
        </div>
      </div>
    </section>
  );
}
