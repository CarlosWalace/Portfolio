import { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import CountryFlag from 'react-country-flag';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language || "en");
  const dropdownRef = useRef(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navItems = [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  const languages = [
    { code: "en", label: "English", flag: "US" },
    { code: "pt", label: "Português", flag: "BR" },
  ];

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
    setShowDropdown(false);
  };

  const selected = languages.find(l => l.code === selectedLang);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo ou nome */}
            <a
              href="#home"
              className="font-mono text-xl font-bold text-white transition-all duration-300 hover:scale-105"
            >
              Carlos<span className="text-green-500">.w</span>
            </a>
            {/* Seletor de idioma logo após o nome */}
            <div className="relative ml-4" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-green-500/30 transition"
                onClick={() => setShowDropdown((v) => !v)}
              >
                <CountryFlag countryCode={selected.flag} svg style={{ width: '2em', height: '2em' }} />
                <span className="text-white hidden sm:inline">{selected.label}</span>
                <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg rounded shadow-lg z-50 border border-green-500/40">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex items-center w-full px-3 py-2 hover:bg-green-500/50 text-white gap-2 transition"
                    >
                      <CountryFlag countryCode={lang.flag} svg style={{ width: '1.5em', height: '1.5em' }} />
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-2 py-1 font-medium transition-all duration-300 
                  ${activeSection === item.id
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                  }
                  group
                `}
              >
                {item.label}
                <span className={`absolute left-0 bottom-0 h-0.5 bg-purple-500 transition-all duration-300 
                  ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
