import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-bg/90 backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:py-5">
        <a href="#" className="font-mono text-sm font-medium text-accent tracking-widest uppercase">
          {/* &lt;dev /&gt; */}
          Raja Oktafrianto
          {/* < /> */}
        </a>

        {/* <button onClick={() => setLanguage(language === "id" ? "en" : "id")}>{language === "id" ? "EN" : "ID"}</button> */}

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a href={item.href} className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-accent" : "text-text-muted hover:text-text"}`}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center border border-border text-text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* <div className="flex items-center border border-gray-400 rounded-xl p-1 text-[10px]">
          <button onClick={() => setLanguage("ID")} className={`px-2 py-1 rounded-lg transition ${language === "ID" ? "bg-blue-500 text-white" : "text-gray-500"}`}>
            ID
          </button>

          <span className="mx-1 text-gray-400">•</span>

          <button onClick={() => setLanguage("EN")} className={`px-2 py-1 rounded-lg transition ${language === "EN" ? "bg-blue-500 text-white" : "text-gray-500"}`}>
            EN
          </button>
        </div> */}
      </nav>

      <div className={`border-t border-border bg-bg/95 backdrop-blur-md transition-all duration-300 md:hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}>
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block border-b border-border/60 py-4 font-mono text-xs tracking-widest uppercase transition-colors duration-200 last:border-b-0 ${isActive ? "text-accent" : "text-text-muted hover:text-text"}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
