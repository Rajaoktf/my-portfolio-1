import { useRef, useEffect, useState } from "react";
import { Code2, Globe, Link, Mail } from "lucide-react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const socials = [
  { icon: Code2, label: "GitHub", href: "https://github.com/razzto", handle: "@rajaoktf_" },
  { icon: Link, label: "LinkedIn", href: "https://www.linkedin.com/in/raja-oktafrianto-82086821a/", handle: "Raja Oktafrianto" },
  { icon: Globe, label: "Instagram", href: "https://www.instagram.com/rajaoktf_/", handle: "@rajaoktf" },
  { icon: Mail, label: "Email", href: "http://rajaoktafrianto2@gmail.com/", handle: "rajaoktafrianto2@gmail.com" },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rajaoktafrianto2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-surface">
      <div className="mx-auto max-w-5xl">
        <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">04 / contact</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-text md:text-5xl">
                Let's build
                <br />
                <span className="text-text-muted">something great.</span>
              </h2>

              <p className="mb-10 max-w-md text-text-muted leading-relaxed">Gua lagi open buat peluang baru — freelance, contract, maupun full-time. Kalau lo punya projek keren atau sekedar mau ngobrol soal frontend, reach out aja!</p>

              <button onClick={handleCopyEmail} className="group relative flex items-center gap-3 border border-border px-6 py-3 font-mono text-sm transition-all hover:border-accent">
                <Mail size={14} className="text-accent" />
                <span className="text-text-muted group-hover:text-text transition-colors">{copied ? "Email copied! ✓" : "rajaoktafrianto2@gmail.com"}</span>
              </button>
            </div>

            {/* Right - Socials */}
            <div>
              <p className="mb-6 font-mono text-xs tracking-widest text-text-muted uppercase">Find me on</p>
              <ul className="space-y-px bg-border">
                {socials.map(({ icon: Icon, label, href, handle }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between bg-surface p-5 transition-colors hover:bg-muted">
                      <div className="flex items-center gap-4">
                        <Icon size={16} className="text-text-muted group-hover:text-accent transition-colors" />
                        <span className="text-sm text-text-muted group-hover:text-text transition-colors">{label}</span>
                      </div>
                      <span className="font-mono text-xs text-text-dim group-hover:text-text-muted transition-colors">{handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
