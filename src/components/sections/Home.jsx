import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="glass p-6 rounded-xl border border-purple-500 hover:-translate-y-1 hover:border-purple-300 transition-all text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            {t("Hi, I'm Carlos")}
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {t("homeDescription")}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded font-medium border border-green-500/30 bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              {t("View Projects")}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded font-medium border border-green-500/30 bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              {t("Contact Me")}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
