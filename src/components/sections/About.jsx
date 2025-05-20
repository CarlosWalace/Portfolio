import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaFilePdf,
  FaChevronDown,
  FaGraduationCap,
  FaLaptopCode
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiMysql
} from "react-icons/si";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const About = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  
  // Tecnologias separadas por categoria
  const frontendTechnologies = [
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl sm:text-3xl" /> },
    { name: "Vue", icon: <FaVuejs className="text-green-500 text-2xl sm:text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl sm:text-3xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" /> },
  ];

  const backendTechnologies = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl sm:text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl sm:text-3xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-2xl sm:text-3xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-2xl sm:text-3xl" /> },
  ];

  // Dados para a seção de certificados e PDFs
  const certificatesData = [
  {
    id: 'courses',
    title: 'Courses',
    icon: <FaGraduationCap className="text-yellow-400 text-lg sm:text-xl mr-2" />,
    items: [
      { name: 'Advanced React Development', file: '/portfolio/assets/PDFs/Courses/react-advanced.pdf' },
      { name: 'Node.js Masterclass', file: '/portfolio/assets/PDFs/Courses/nodejs-masterclass.pdf' },
      { name: 'Full Stack Web Development', file: '/portfolio/assets/PDFs/Courses/fullstack-dev.pdf' },
    ]
  },
  {
    id: 'workshops',
    title: 'Workshops',
    icon: <FaLaptopCode className="text-green-400 text-lg sm:text-xl mr-2" />,
    items: [
      { name: 'Docker for Developers', file: '/portfolio/assets/PDFs/Workshops/docker-workshop.pdf' },
      { name: 'API Design Best Practices', file: '/portfolio/assets/PDFs/Workshops/api-design.pdf' },
      { name: 'Frontend Performance Optimization', file: '/portfolio/assets/PDFs/Workshops/frontend-perf.pdf' },
    ]
  }
];

  // Selecionar o array de tecnologias com base na aba ativa
  const technologies = activeTab === 'frontend' ? frontendTechnologies : backendTechnologies;

  // Número de itens visíveis por vez (ajuste conforme necessário)
  const itemsPerPage = window.innerWidth < 640 ? 2 : 4; // Mostrar menos itens em telas pequenas
  const totalPages = Math.ceil(technologies.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  // Resetar o índice ao trocar de aba
  const changeTab = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // Alternar a expansão de uma seção
  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  // Calcular quais tecnologias mostrar na página atual
  const visibleTechnologies = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex * itemsPerPage + i);
    if (index < technologies.length) {
      visibleTechnologies.push(technologies[index]);
    }
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-12 sm:py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-4 sm:p-8 border-white/10 border hover:-translate-y-1 transition-all text-center">
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Developer with experience in building full stack web applications.
            </p>

            {/* Carrossel controlável de tecnologias com abas */}
            <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">My Tech Stack</h3>
              
              {/* Abas para alternar entre frontend e backend */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <button
                  onClick={() => changeTab('frontend')}
                  className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-l-lg transition-all ${
                    activeTab === 'frontend'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                  }`}
                >
                  Frontend
                </button>
                <button
                  onClick={() => changeTab('backend')}
                  className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-r-lg transition-all ${
                    activeTab === 'backend'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                  }`}
                >
                  Backend
                </button>
              </div>
              
              <div className="relative">
                <div className="flex justify-between items-center">
                  {/* Botão anterior */}
                  {technologies.length > itemsPerPage && (
                    <button
                      onClick={prevSlide}
                      className="absolute left-0 z-10 bg-blue-500/20 hover:bg-blue-500/30 p-1 sm:p-2 rounded-full transition-all transform -translate-y-1/2 top-1/2"
                      aria-label="Previous technologies"
                    >
                      <IoIosArrowBack className="text-blue-400 text-base sm:text-xl" />
                    </button>
                  )}
                  
                  {/* Container do carrossel */}
                  <div className="flex justify-center space-x-2 sm:space-x-4 py-4 sm:py-6 px-8 sm:px-12 w-full transition-all duration-300">
                    {visibleTechnologies.length > 0 ? (
                      visibleTechnologies.map((tech, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center bg-blue-500/10 p-3 sm:p-5 rounded-xl w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] hover:bg-blue-500/20
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all transform hover:-translate-y-1"
                        >
                          <div className="mb-2 sm:mb-3">{tech.icon}</div>
                          <span className="text-xs sm:text-sm text-gray-300 text-center">{tech.name}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-400 text-xs sm:text-sm">No technologies to display</p>
                    )}
                  </div>
                  
                  {/* Botão próximo */}
                  {technologies.length > itemsPerPage && (
                    <button
                      onClick={nextSlide}
                      className="absolute right-0 z-10 bg-blue-500/20 hover:bg-blue-500/30 p-1 sm:p-2 rounded-full transition-all transform -translate-y-1/2 top-1/2"
                      aria-label="Next technologies"
                    >
                      <IoIosArrowForward className="text-blue-400 text-base sm:text-xl" />
                    </button>
                  )}
                </div>
                
                {/* Indicadores de página */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
                          currentIndex === index ? 'bg-blue-500 w-3 sm:w-4' : 'bg-gray-500'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-white"> Bachelor in Computer Science </strong> - Puc Minas University
                  graduated in (2024)
                </li>
              </ul>
              
              {/* Seção expansível para certificados e PDFs */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"> 📄 Certificates & Qualifications </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  {certificatesData.map((section) => (
                    <div key={section.id} className="border border-white/10 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleSection(section.id)}
                        className="w-full p-2 sm:p-3 flex items-center justify-between bg-blue-500/10 hover:bg-blue-500/20 transition-all"
                      >
                        <div className="flex items-center">
                          {section.icon}
                          <span className="font-medium text-xs sm:text-sm">{section.title}</span>
                        </div>
                        <FaChevronDown 
                          className={`text-blue-400 text-sm sm:text-base transition-transform duration-300 ${
                            expandedSection === section.id ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {expandedSection === section.id && (
                        <div className="p-2 sm:p-3 bg-blue-500/5">
                          <ul className="space-y-1 sm:space-y-2">
                            {section.items.map((item, index) => (
                              <li key={index} className="flex items-start sm:items-center">
                                <FaFilePdf className="text-red-400 mr-2 mt-0.5 sm:mt-0 flex-shrink-0 text-xs sm:text-sm" />
                                <a 
                                  href={item.file} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm break-words"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
                
            <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"> 💼 Work Experience </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Software Engineer at ABC Corp (2020 - Present)
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    Intern at DEF Startups (2019)
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
