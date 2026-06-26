import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data';

function useInView(threshold = 0.1) {
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

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              03 / projects
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="mb-16 flex items-end justify-between">
            <h2 className="text-4xl font-semibold tracking-tight text-text md:text-5xl">
              Selected <span className="text-text-muted">works.</span>
            </h2>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden font-mono text-xs text-text-muted underline underline-offset-4 hover:text-accent transition-colors sm:block"
            >
              View all on GitHub →
            </a>
          </div>

          <div className="space-y-px bg-border">
            {projects.map((project, i) => (
              <article
                key={project.id}
                className="group relative bg-bg p-8 transition-colors hover:bg-surface"
                style={{
                  transitionDelay: inView ? `${i * 80}ms` : '0ms',
                }}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    {/* Header row */}
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-xs text-text-dim">
                        {project.year}
                      </span>
                      <span className="h-px w-4 bg-text-dim" />
                      <h3 className="text-lg font-medium text-text group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mb-5 max-w-xl text-sm leading-relaxed text-text-muted">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border px-2 py-0.5 font-mono text-xs text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 shrink-0">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-text-muted transition-colors hover:text-accent"
                        aria-label="GitHub repo"
                      >
                        <Code2 size={16} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-text-muted transition-colors hover:text-accent"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
