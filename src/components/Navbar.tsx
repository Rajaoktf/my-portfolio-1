import { useState, useEffect } from "react";
import { navItems } from "../data";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // const { language, setLanguage } = useLanguage();
  const [language, setLanguage] = useState("ID");

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
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#" className="font-mono text-sm font-medium text-accent tracking-widest uppercase">
          {/* &lt;dev /&gt; */}
          Raja Oktafrianto
        </a>

        {/* <button onClick={() => setLanguage(language === "id" ? "en" : "id")}>{language === "id" ? "EN" : "ID"}</button> */}

        <ul className="flex items-center gap-8">
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
    </header>
  );
}
