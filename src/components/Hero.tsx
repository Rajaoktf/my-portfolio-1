import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const roles = ["Frontend Developer", "UI Engineer", "React Specialist", "Web Craftsman"];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [marqueeDirection, setMarqueeDirection] = useState<"left" | "right">("left");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? latest;

    if (Math.abs(latest - previous) < 1) return;

    setMarqueeDirection(latest > previous ? "left" : "right");
  });

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

  const techs = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Tailwind", "Next.js", "Git", "GitHub"];

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#e2ff00 1px, transparent 1px), linear-gradient(90deg, #e2ff00 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent opacity-5 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:pb-16">
        <div>
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-text-muted uppercase animate-fade-up">Hello.</p>

          <h1 className="mb-4 text-6xl font-semibold leading-tight tracking-tight text-text md:text-8xl animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            I'm Raja
            <br />
            <span className="text-accent">Oktafrianto</span>
          </h1>

          <div className="mb-10 flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="font-mono text-xl text-text-muted md:text-2xl">
              {displayed}
              <span className="animate-blink text-accent">|</span>
            </span>
          </div>

          <p className="mb-12 max-w-xl text-base leading-relaxed text-text-muted animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            {/* Gua bikin web yang cepat, aksesibel, dan enak dipake. Fokus di React ecosystem — dari design system sampai performance optimization. */}
            Saya membangun aplikasi web modern menggunakan React, TypeScript, dan Tailwind CSS dengan fokus pada performa, pengalaman pengguna, dan kode yang mudah dipelihara.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <a href="#projects" className="group flex items-center gap-2 bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-all hover:bg-accent-dim">
              Lihat Projek
              <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="border border-border px-6 py-3 font-mono text-sm text-text-muted transition-all hover:border-accent hover:text-accent">
              Hubungi Saya
            </a>
          </div>

          {/* Status indicator */}
          {/* <div
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
        </div> */}
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <div className="overflow-hidden rounded-lg border border-border bg-surface/70 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-text-muted">code.tsx</span>
            </div>

            <div className="overflow-x-auto px-5 py-5 font-mono text-sm leading-7">
              <div className="grid min-w-[420px] grid-cols-[2rem_1fr] gap-x-4">
                <span className="select-none text-right text-text-dim">1</span>
                <code>
                  <span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">Raja</span> <span className="text-text-muted">=</span> <span className="text-[#e5c07b]">()</span> <span className="text-[#c678dd]">=&gt;</span> <span className="text-text">{"{"}</span>
                </code>
                <span className="select-none text-right text-text-dim">2</span>
                <code className="pl-4">
                  <span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">skills</span> <span className="text-text-muted">=</span> <span className="text-text">[</span>
                </code>
                <span className="select-none text-right text-text-dim">3</span>
                <code className="pl-8">
                  <span className="text-accent">"React"</span>
                  <span className="text-text-muted">,</span> <span className="text-accent">"TypeScript"</span>
                  <span className="text-text-muted">,</span> <span className="text-accent">"Tailwind CSS"</span>
                  <span className="text-text-muted">,</span>
                </code>
                <span className="select-none text-right text-text-dim">4</span>
                <code className="pl-8">
                  <span className="text-accent">"Next.js"</span>
                  <span className="text-text-muted">,</span> <span className="text-accent">"UI/UX"</span>
                  <span className="text-text-muted">,</span> <span className="text-accent">"Performance"</span>
                </code>
                <span className="select-none text-right text-text-dim">5</span>
                <code className="pl-4">
                  <span className="text-text">];</span>
                </code>
                <span className="select-none text-right text-text-dim">6</span>
                <code>&nbsp;</code>
                <span className="select-none text-right text-text-dim">7</span>
                <code className="pl-4">
                  <span className="text-[#c678dd]">return</span> <span className="text-text">(</span>
                </code>
                <span className="select-none text-right text-text-dim">8</span>
                <code className="pl-8">
                  <span className="text-[#61afef]">&lt;div</span> <span className="text-[#e5c07b]">className</span>
                  <span className="text-text-muted">=</span>
                  <span className="text-accent">"passion"</span>
                  <span className="text-[#61afef]">&gt;</span>
                </code>
                <span className="select-none text-right text-text-dim">9</span>
                <code className="pl-12 text-text">Building modern &amp; performant web</code>
                <span className="select-none text-right text-text-dim">10</span>
                <code className="pl-8">
                  <span className="text-[#61afef]">&lt;/div&gt;</span>
                </code>
                <span className="select-none text-right text-text-dim">11</span>
                <code className="pl-4">
                  <span className="text-text">);</span>
                </code>
                <span className="select-none text-right text-text-dim">12</span>
                <code>
                  <span className="text-text">{"}"}</span>
                </code>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-border px-5 py-4 font-mono text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span>Available for work</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Jakarta, Indonesia</span>
                <MapPin size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-border bg-bg/70 py-5 backdrop-blur">
        <motion.div className={`flex w-max gap-8 px-8 animate-marquee ${marqueeDirection === "right" ? "animate-marquee-reverse" : ""}`}>
          {[...techs, ...techs].map((tech, index) => (
            <span key={`${tech}-${index}`} className="group flex items-center gap-8 font-mono text-sm text-text-muted whitespace-nowrap transition-colors hover:text-accent">
              {tech}
              <span className="h-1 w-1 rounded-full bg-accent opacity-50 transition-opacity group-hover:opacity-100" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
