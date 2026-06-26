import { useRef, useEffect, useState } from 'react';
import { skills } from '../data';

function useInView(threshold = 0.15) {
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

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="relative py-32 px-6 bg-surface">
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              02 / skills
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="mb-16 text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Tech stack &amp;{' '}
            <span className="text-text-muted">tools.</span>
          </h2>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <div
                key={skill.category}
                className="bg-surface p-8 transition-colors hover:bg-muted"
                style={{
                  transitionDelay: inView ? `${i * 60}ms` : '0ms',
                }}
              >
                <p className="mb-5 font-mono text-xs tracking-widest text-accent uppercase">
                  {skill.category}
                </p>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-muted"
                    >
                      <span className="h-px w-3 bg-border" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
