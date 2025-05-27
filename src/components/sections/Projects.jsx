import React from 'react'
import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaVuejs,
  FaNodeJs
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql
} from "react-icons/si";
import img1 from '../../assets/images/Criacao-de-Conta.png'
import img2 from '../../assets/images/Login.png'
import img3 from '../../assets/images/Edicao-de-Perfil.png'
import img4 from '../../assets/images/Painel-de-Eventos.png'
import img5 from '../../assets/images/Criacao-de-um-Novo-Evento.png'
import img6 from '../../assets/images/Edicao-de-Eventos.png'
import img7 from '../../assets/images/V-LIBRAS-funcionando.png'
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();

  // Project data with multiple images for carousel
  const projects = [
    {
      title: "ChampionSphere",
      description: t("Fullstack application with user management and event creation, designed for the gaming community, with a strong focus on accessibility for users with sensory disabilities."),
      images: [
        { src: img1, title: t("Account Creation") },
        { src: img2, title: t("Create a New Event") },
        { src: img3, title: t("Profile Editing") },
        { src: img4, title: t("Event Dashboard") },
        { src: img5, title: t("Create a New Event") },
        { src: img6, title: t("Event Editing") },
        { src: img7, title: t("V-LIBRAS Working") },
      ],
      link: "https://github.com/CarlosWalace/ChampionSphere",
      frontendTechnologies: [
        { name: "Vue.js", icon: <FaVuejs className="text-green-500 text-xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" /> },
      ],
      backendTechnologies: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600 text-xl" /> },
      ]
    }
  ];

  // Estado para controlar o índice da imagem atual para cada projeto
  const [currentImageIndices, setCurrentImageIndices] = useState(projects.map(() => 0));

  // Estado para controlar a aba ativa de tecnologias para cada projeto
  const [activeTabs, setActiveTabs] = useState(projects.map(() => 'frontend'));

  // Estado para controlar o índice atual do carrossel de tecnologias para cada projeto
  const [currentTechIndices, setCurrentTechIndices] = useState(projects.map(() => 0));

  // Função para avançar para a próxima imagem
  const nextImage = (projectIndex) => {
    setCurrentImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = (newIndices[projectIndex] + 1) % projects[projectIndex].images.length;
      return newIndices;
    });
  };

  // Função para voltar para a imagem anterior
  const prevImage = (projectIndex) => {
    setCurrentImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = (newIndices[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length;
      return newIndices;
    });
  };

  // Função para mudar a aba de tecnologias (frontend/backend) para um projeto específico
  const changeTab = (projectIndex, tab) => {
    setActiveTabs(prevTabs => {
      const newTabs = [...prevTabs];
      newTabs[projectIndex] = tab;
      return newTabs;
    });

    // Reset do índice do carrossel ao trocar de aba
    setCurrentTechIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = 0;
      return newIndices;
    });
  };

  // Funções para o carrossel de tecnologias
  const nextTechSlide = (projectIndex) => {
    const technologies = activeTabs[projectIndex] === 'frontend'
      ? projects[projectIndex].frontendTechnologies
      : projects[projectIndex].backendTechnologies;

    const itemsPerPage = 3; // Número de tecnologias visíveis por vez
    const totalPages = Math.ceil(technologies.length / itemsPerPage);

    setCurrentTechIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = (newIndices[projectIndex] + 1) % totalPages;
      return newIndices;
    });
  };

  const prevTechSlide = (projectIndex) => {
    const technologies = activeTabs[projectIndex] === 'frontend'
      ? projects[projectIndex].frontendTechnologies
      : projects[projectIndex].backendTechnologies;

    const itemsPerPage = 3; // Número de tecnologias visíveis por vez
    const totalPages = Math.ceil(technologies.length / itemsPerPage);

    setCurrentTechIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[projectIndex] = (newIndices[projectIndex] - 1 + totalPages) % totalPages;
      return newIndices;
    });
  };

  // Função para obter as tecnologias visíveis para um projeto específico
  const getVisibleTechnologies = (projectIndex) => {
    const technologies = activeTabs[projectIndex] === 'frontend'
      ? projects[projectIndex].frontendTechnologies
      : projects[projectIndex].backendTechnologies;

    const itemsPerPage = 3; // Número de tecnologias visíveis por vez
    const startIndex = currentTechIndices[projectIndex] * itemsPerPage;

    return technologies.slice(startIndex, startIndex + itemsPerPage);
  };

  // Função para calcular o número total de páginas para o carrossel de tecnologias
  const getTotalTechPages = (projectIndex) => {
    const technologies = activeTabs[projectIndex] === 'frontend'
      ? projects[projectIndex].frontendTechnologies
      : projects[projectIndex].backendTechnologies;

    const itemsPerPage = 3; // Número de tecnologias visíveis por vez
    return Math.ceil(technologies.length / itemsPerPage);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("Featured Projects")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, projectIndex) => (
              <div
                key={projectIndex}
                className="glass p-6 rounded-xl border border-purple-500 hover:-translate-y-1 hover:border-purple-300 transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Título da imagem */}
                <h4 className="text-sm font-semibold text-gray-300 mb-2 text-center">
                  {project.images[currentImageIndices[projectIndex]].title}
                </h4>

                {/* Simple Carousel */}
                <div className="mb-4 overflow-hidden rounded-xl relative">
                  <div className="relative">
                    <img
                      src={project.images[currentImageIndices[projectIndex]].src}
                      alt={`${project.title} - ${project.images[currentImageIndices[projectIndex]].title}`}
                      className="w-full h-64 object-cover transition-opacity duration-300 rounded-xl"
                    />

                    {/* Navigation buttons */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        prevImage(projectIndex);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-purple-500 transition"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        nextImage(projectIndex);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-purple-500 transition"
                      aria-label="Next image"
                    >
                      →
                    </button>

                    {/* Indicators dentro da imagem */}
                    <div className="flex justify-center gap-1 mt-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentImageIndices(prevIndices => {
                              const newIndices = [...prevIndices];
                              newIndices[projectIndex] = index;
                              return newIndices;
                            });
                          }}
                          className={`w-2 h-2 rounded-full ${index === currentImageIndices[projectIndex]
                            ? 'bg-green-500'
                            : 'bg-white/50  hover:bg-purple-500'
                            } transition`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Stack Carousel */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-300">{t("Technologies Used:")}</h4>

                  {/* Abas para alternar entre frontend e backend */}
                  <div className="flex justify-center mb-3">
                    <button
                      onClick={() => changeTab(projectIndex, 'frontend')}
                      className={`px-3 py-1 text-xs rounded-l-lg transition-all border border-green-500/30  ${activeTabs[projectIndex] === 'frontend'
                        ? 'bg-green-500 text-white'
                        : 'bg-green-500/20 text-green-400 hover:bg-green-300/30'
                        }`}
                    >
                      {t("Frontend")}
                    </button>
                    <button
                      onClick={() => changeTab(projectIndex, 'backend')}
                      className={`px-3 py-1 text-xs rounded-r-lg transition-all border border-green-500/30 ${activeTabs[projectIndex] === 'backend'
                        ? 'bg-green-500 text-white'
                        : 'bg-green-500/20 text-green-400 hover:bg-green-300/30'
                        }`}
                    >
                      {t("Backend")}
                    </button>
                  </div>

                  {/* Carrossel de tecnologias */}
                  <div className="relative">
                    <div className="flex justify-between items-center">
                      {/* Botões de navegação só aparecem se houver mais páginas */}
                      {getTotalTechPages(projectIndex) > 1 && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            prevTechSlide(projectIndex);
                          }}
                          className="absolute left-0 z-10 bg-green-500/20 hover:bg-green-500/30 p-1 rounded-full transition-all transform -translate-y-1/2 top-1/2"
                          aria-label="Previous technologies"
                        >
                          <IoIosArrowBack className="text-green-400 text-sm" />
                        </button>
                      )}

                      {/* Container do carrossel */}
                      <div className="flex justify-center space-x-3 py-2 px-8 w-full transition-all duration-300">
                        {getVisibleTechnologies(projectIndex).map((tech, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-green-500/10 p-2 rounded-lg w-[70px] h-[70px] 
                            border border-green-500/30 hover:bg-green-300/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] 
                            transition-all transform hover:-translate-y-1"
                          >
                            <div className="mb-1">{tech.icon}</div>
                            <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Botão próximo */}
                      {getTotalTechPages(projectIndex) > 1 && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            nextTechSlide(projectIndex);
                          }}
                          className="absolute right-0 z-10 bg-green-500/20 hover:bg-green-500/30 p-1 rounded-full transition-all transform -translate-y-1/2 top-1/2"
                          aria-label="Next technologies"
                        >
                          <IoIosArrowForward className="text-green-400 text-sm" />
                        </button>
                      )}
                    </div>

                    {/* Indicadores de página */}
                    {getTotalTechPages(projectIndex) > 1 && (
                      <div className="flex justify-center mt-2 space-x-1">
                        {Array.from({ length: getTotalTechPages(projectIndex) }).map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTechIndices(prevIndices => {
                              const newIndices = [...prevIndices];
                              newIndices[projectIndex] = index;
                              return newIndices;
                            })}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${currentTechIndices[projectIndex] === index ? 'bg-green-500 w-4' : 'bg-gray-500'
                              }`}
                            aria-label={`Go to page ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-purple-300 transition-colors my-4"
                  >
                    {t("View Project →")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
