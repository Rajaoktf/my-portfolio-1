import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const stats = [
  { label: 'Tahun Pengalaman', value: '3+' },
  { label: 'Projek Selesai', value: '20+' },
  { label: 'Klien Puas', value: '12' },
  { label: 'Kopi per Hari', value: '∞' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section label */}
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              01 / about
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Text */}
            <div>
              <h2 className="mb-8 text-4xl font-semibold leading-tight tracking-tight text-text md:text-5xl">
                Crafting interfaces
                <br />
                <span className="text-text-muted">that people love.</span>
              </h2>

              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Gua seorang Frontend Developer berbasis di Jakarta dengan pengalaman
                  3+ tahun bikin web app yang scalable dan maintainable. Passion gua
                  ada di persimpangan antara engineering dan design.
                </p>
                <p>
                  Gua percaya bahwa kode yang bagus itu bukan cuma soal "works" — tapi
                  soal readable, testable, dan enak buat di-maintain jangka panjang.
                  Detail kecil itu penting, dari micro-interaction sampai loading state.
                </p>
                <p>
                  Di luar kode, gua suka ngikutin perkembangan design system, contributing
                  ke open source, dan sesekali nulis tentang frontend engineering.
                </p>
              </div>

              <a
                href="/resume.pdf"
                className="mt-8 inline-flex items-center gap-2 border border-border px-5 py-2.5 font-mono text-sm text-text-muted transition-all hover:border-accent hover:text-accent"
              >
                Download Resume
                <span className="text-accent">↓</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-bg p-8">
                  <p className="mb-1 font-mono text-4xl font-medium text-accent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
