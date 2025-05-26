import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-white/10 z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo/Nome */}
                <div className="text-xl font-bold text-white">
                    Carlos Wallace
                </div>

                {/* Menu de Navegação */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
                    <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>

                    {/* Seletor de Idioma */}
                    <LanguageSelector />
                </div>

                {/* Menu Mobile */}
                <div className="md:hidden">
                    <LanguageSelector />
                </div>
            </nav>
        </header>
    );
};